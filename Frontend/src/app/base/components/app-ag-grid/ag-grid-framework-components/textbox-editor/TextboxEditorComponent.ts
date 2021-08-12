import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseCellEditor } from '../base-cell-editor';
import { ValidationUtil } from '../../../../validators/ValidationUtil';
@Component({
    selector: 'app-textbox-editor',
    templateUrl: './textbox-editor.component.html',
    styleUrls: ['./textbox-editor.component.css']
})
export class TextboxEditorComponent extends BaseCellEditor implements AfterViewInit, OnDestroy {
    cellHeight: string;
    cellWidth: string;
    tooltipText: string = '';
    _params: any;
    onInit(params: any) {
        this._params = params;
        this.cellWidth = `${params.column.actualWidth}px`;
        this.cellHeight = `${params.column.actualHeight}px`;
    }
    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }
    ngAfterViewInit(): void {
        // throw new Error("Method not implemented.");
    }

    constructor() {
        super();
    }

    onGetValue(value: any) {
        this.tooltipText = this.validationSummary && this.validationSummary.length > 0 ? this.validationSummary.map(i => i.message).join('\n') : null;
        return this.isInvalidValue ? value : this.cellValue;
    }

    keyHandler(event) {
        if (this._params.colDef.validationRules && this._params.colDef.validationRules.number) {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        return true;
    }
    onTextboxEditorBlur($event) {
        if (!this.params.api.TRCContext || !this.params.api.TRCContext.events || !this.params.api.TRCContext.events.onCellFocusOut) {
            return;
        }
        this.params.api.TRCContext.events.onCellFocusOut(this.params, this.cellValue);
    }
}
