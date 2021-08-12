import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseCellEditor } from '../base-cell-editor';

@Component({
    selector: 'app-auto-complete-editor',
    templateUrl: './auto-complete-editor.component.html',
    styleUrls: ['./auto-complete-editor.component.scss'],
})
export class AutoCompleteEditorComponent extends BaseCellEditor implements AfterViewInit, OnDestroy {
    lookupData: any = [];
    lookupValue: any;
    selected = { name: null, value: null };
    params: any;
    gridApi: any;
    defaultKey: string;
    emptyOption: any;
    hasFocus: boolean = false;
    showCrossButton = true;
    lookupPlaceHolder = '';
    searchKey = 'name';
    searchValue = 'value';
    errorMessage = '';
    errorCondition = false;
    isRequired = false;
    listLimit = 100;

    constructor() {
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
        this.searchKey = colDef.cellEditorParams.searchKey || '';
        this.searchValue = colDef.cellEditorParams.searchValue || '';
        this.listLimit = colDef.cellEditorParams.listLimit || 0;

        const findValue = values.find((i) => (this.searchKey && this.searchKey != '' ? i[this.searchKey] == params.value : i == params.value));

        if (findValue) {
            this.lookupData = [findValue];
            this.lookupValue = findValue;
        } else {
            // const noOption = { name: '', value: '' };
            // if (colDef.defaultKey) {
            //   const findDefaultValue = values.find(
            //     (i) => i.value == colDef.defaultKey
            //   );
            //   this.lookupData = findDefaultValue ? [findDefaultValue] : [noOption];
            //   this.lookupValue = findDefaultValue || noOption;
            // } else if (this.emptyOption) {
            //   this.lookupData = [this.emptyOption];
            //   this.lookupValue = this.emptyOption;
            // } else {
            //   this.lookupData = [noOption];
            //   this.lookupValue = noOption;
            // }
        }
        if (this.params.colDef.cellEditorParams && this.params.colDef.cellEditorParams.values && this.params.colDef.cellEditorParams.values.length > 0) {
            this.lookupData = this.params.colDef.cellEditorParams.values;
        }
        console.log('lookup data', this.lookupData);
    }

    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }
    ngAfterViewInit(): void {
        // throw new Error("Method not implemented.");
    }

    onFocus($event) {
        // if (
        //   this.params.colDef.cellEditorParams &&
        //   this.params.colDef.cellEditorParams.values &&
        //   this.params.colDef.cellEditorParams.values.length > 0
        // ) {
        //   this.lookupData = this.params.colDef.cellEditorParams.values;
        // }
    }
    onValueSelected(event) {
        console.log('on value selected', event);
        this.cellValue = event;
        this.selected = this.cellValue;
        this.lookupValue = event;
    }
    onTextCleared(event) {
      console.log('on text change', event);
      this.cellValue = event;
      this.selected = this.cellValue;
      this.lookupValue = event;
    }
    trackByfunction(index, item) {
        return item.value;
    }
}
