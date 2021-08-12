import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { SharedService } from '../../../../../shared/shared.service';
import { EventService, EventKeys } from '../../../../../shared/event/event.service';
import { HttpClient } from '@angular/common/http';
import { BaseCellEditor } from '../base-cell-editor';

@Component({
    selector: 'app-lookup-list-editor',
    templateUrl: './lookup-list-editor.component.html',
    styleUrls: ['./lookup-list-editor.component.scss']
})
export class LookupListEditorComponent extends BaseCellEditor implements AfterViewInit, OnDestroy {
    lookupData: any = [];
    lookupValue: any;
    selected = { name: null, value: null };
    params: any;
    gridApi: any;
    defaultKey: string;
    emptyOption: any;
    hasFocus: boolean = false;
    constructor(private httpClient: HttpClient) {
        super();
    }
    onGetValue(value: any) {
        this.cellValue = this.lookupValue ? this.lookupValue.value : '';
        this.selected = this.cellValue;
        return this.lookupValue ? this.lookupValue.value : '';
    }
    onInit(params: any) {
        //  console.log(params);
        this.params = params;
        this.gridApi = params.api;
        this.selected = params.value;
        const colDef = this.params.colDef;
        let values = colDef.cellEditorParams.values || [];
        this.emptyOption = colDef.emptyOption;

        // used for loop here to find value in lookup
        // for loop is good in performence agains find or filter.
        let findValue = values.find(i => i.value == params.value);

        if (findValue) {
            this.lookupData = [findValue];
            this.lookupValue = findValue;
        } else {
            const noOption = { name: '', value: '' };
            if (colDef.defaultKey) {
                const findDefaultValue = values.find(i => i.value == colDef.defaultKey);
                this.lookupData = findDefaultValue ? [findDefaultValue] : [noOption];
                this.lookupValue = findDefaultValue || noOption;
            } else if (this.emptyOption) {
                this.lookupData = [this.emptyOption];
                this.lookupValue = this.emptyOption;
            } else {
                this.lookupData = [noOption];
                this.lookupValue = noOption;
            }
        }

        /// register child component to listen event.
        /// cascade component child component.
        this.childComponentListener(params);
    }
    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }
    ngAfterViewInit(): void {
        // throw new Error("Method not implemented.");
    }
    onLookupChange($event, setSelection: boolean = true) {
        this.parentComponentDispatcher($event, true);
    }
    onFocus($event) {
        if (this.params.colDef.cellEditorParams && this.params.colDef.cellEditorParams.values && this.params.colDef.cellEditorParams.values.length > 0) {
            if (this.params.colDef.isChild) {


                if (!this.params.colDef.cellEditorParams.filteredValues && this.params.colDef.cellEditorParams.values && this.params.colDef.cellEditorParams.values.length > 0) {
                    const parentVal = this.params.data[this.params.colDef.parentField] || "";
                    this.params.colDef.cellEditorParams.filteredValues = this.params.colDef.cellEditorParams.values.filter(i => i.parentField.trim() == parentVal.trim()) || this.params.colDef.cellEditorParams.values;
                }
                this.lookupData = this.params.colDef.cellEditorParams.filteredValues;
            } else {
                this.lookupData = this.params.colDef.cellEditorParams.values;
            }
        }
    }
    trackByfunction(index, item) {
        return item.value;
    }

    private childComponentListener(params) {
        params.api.addEventListener('childComponentListener', e => {
            //  console.log('params in change editor', params);
            let value = e.value.value.value;
            const colDef = params.colDef;
            if (!colDef || !colDef.parentField || !colDef.cellEditorParams || !colDef.cellEditorParams.values) return;
            const data = colDef.cellEditorParams.values || [];

            this.lookupData = [];
            this.lookupData = data.filter(i => i.parentField.trim() == value.trim());
            colDef.cellEditorParams.filteredValues = this.lookupData;
            const paramsVal = params.value || "";
            const valueFound = this.lookupData.find(i => i.value.trim() == paramsVal);
            if (valueFound) {
                this.lookupValue = valueFound;
            } else {
                this.lookupValue = this.lookupData[0];
            }
        });
    }

    private parentComponentDispatcher($event, setSelection) {
        if (setSelection) {
            const colDef = this.params.colDef;
            if (!colDef || !colDef.isParent) return;
            if (colDef.isParent) {
                const eventMessage = {
                    type: 'childComponentListener',
                    api: this.gridApi,
                    columnApi: this.params.columnApi,
                    node: this.params.node,
                    data: this.params.data,
                    rowIndex: this.params.rowIndex,
                    rowPinned: false,
                    context: this.gridApi.context,
                    column: this.params.column,
                    colDef: this.params.colDef,
                    value: $event,
                    oldValue: this.params.value,
                    newValue: $event
                };
                this.gridApi.dispatchEvent(eventMessage);
            }
        }
    }
    resetSelection() {
      const noOption = { name: '', value: '' };
      this.lookupValue = noOption;
    }
}
