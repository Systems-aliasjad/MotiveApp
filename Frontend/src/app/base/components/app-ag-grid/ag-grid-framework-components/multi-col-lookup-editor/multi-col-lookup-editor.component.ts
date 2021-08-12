import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseCellEditor } from '../base-cell-editor';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-multi-col-lookup-editor',
    templateUrl: './multi-col-lookup-editor.component.html',
    styleUrls: ['./multi-col-lookup-editor.component.scss'],
})
export class MultiColLookupEditorComponent extends BaseCellEditor implements AfterViewInit, OnDestroy {
    lookupData: any = [];
    lookupValue: any;
    selected = { name: null, value: null };
    params: any;
    gridApi: any;
    defaultKey: string;
    emptyOption: any;
    hasFocus: boolean = false;
    columns;
    panelClass;
    displayCol;
    keyCol;
    open = false;
    constructor(private httpClient: HttpClient) {
        super();
    }
    onGetValue(value: any) {
        this.cellValue = this.lookupValue ? (this.keyCol ? this.lookupValue[this.keyCol]: this.lookupValue[0]) : '';
        this.selected = this.cellValue;
        return this.lookupValue ? (this.keyCol ? this.lookupValue[this.keyCol]: this.lookupValue[0]) : '';
    }
    onInit(params: any) {
        //  console.log(params);
        this.params = params;
        this.gridApi = params.api;
        this.selected = params.value;
        const colDef = this.params.colDef;
        this.columns = colDef.cellEditorParams.columnsList;
        this.panelClass = colDef.cellEditorParams.panelClass;
        let values = colDef.cellEditorParams.values || [];
        this.emptyOption = colDef.emptyOption;

        console.log('columns', this.columns);
        // used for loop here to find value in lookup
        // for loop is good in performence against find or filter.
        //let findValue = values.find(i => i.value == params.value);
        const keyCols = params.colDef.cellEditorParams.columnsList.filter((x) => x.isKey == true);
        const displayCols = params.colDef.cellEditorParams.columnsList.filter((x) => x.isDisplayColumn == true);
        this.keyCol = 'key';
        this.displayCol = 'name';
        if (keyCols && keyCols.length > 0) {
            this.keyCol = keyCols[0].fieldId;
        }
        if (displayCols && displayCols.length > 0) {
            this.displayCol = displayCols[0].fieldId;
        }
        const findValue = values.find((i) => i[this.keyCol] == params.value);

        if (findValue) {
            this.lookupData = [findValue];
            this.lookupValue = findValue;
        } else {
            const noOption = { name: '', value: '' };
            if (colDef.defaultKey) {
                const findDefaultValue = values.find((i) => i.value == colDef.defaultKey);
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
        console.log('lookup data', this.lookupData);
    }
    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }
    ngAfterViewInit(): void {
        // throw new Error("Method not implemented.");
    }
    onLookupChange($event, setSelection: boolean = true) {
        // console.log('on lookup change',$event);
        // console.log('this.lookupValue',this.lookupValue);

        // let target = $event.source.selected._element.nativeElement;
        //target.innerText = this.displayCol && this.displayCol != '' ? this.lookupValue[this.displayCol] : target.innerText;

        // this.lookupValue = this.lookupValue;
        // this.cellValue = (this.displayCol && this.displayCol!= '' ) ? this.lookupValue[this.displayCol]: this.lookupValue.value;
        // this.selected = this.cellValue;
    }
    onOpenChanged(event) {
         this.open = event;

    }
    onFocus($event) {
        if (this.params.colDef.cellEditorParams && this.params.colDef.cellEditorParams.values && this.params.colDef.cellEditorParams.values.length > 0) {
            this.lookupData = this.params.colDef.cellEditorParams.values;
        }
    }
    trackByfunction(index, item) {
        return item.value;
    }
}
