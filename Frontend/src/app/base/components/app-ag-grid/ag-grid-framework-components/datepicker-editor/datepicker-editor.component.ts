import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { BaseCellEditor } from '../base-cell-editor';

@Component({
    selector: 'app-datepicker-editor',
    templateUrl: './datepicker-editor.component.html',
    styleUrls: ['./datepicker-editor.component.css']
})
export class DatepickerEditorComponent extends BaseCellEditor implements AfterViewInit, OnDestroy {
    onInit(params: any) {
        // throw new Error("Method not implemented.");
    }

    constructor() {
        super();
    }
    onGetValue(value: any) {
        return value;
    }
    ngOnDestroy(): void {}
    ngAfterViewInit(): void {}
}
