import { Component, OnInit } from '@angular/core';
import { ITooltipAngularComp } from '../../../../../../../node_modules/ag-grid-angular/public-api';

@Component({
    selector: 'app-grid-tooltip',
    templateUrl: './grid-tooltip.component.html',
    styleUrls: ['./grid-tooltip.component.css'],
    styles: [
        `
            :host {
                position: absolute;
                width: 150px;
                height: 70px;
                pointer-events: none;
                // transition: opacity 1s;
            }

            :host.ag-tooltip-hiding {
                opacity: 0;
            }

            .custom-tooltip p {
                margin: 5px;
                white-space: nowrap;
            }

            .custom-tooltip p:first-of-type {
                font-weight: bold;
            }
        `,
    ],
})
export class GridTooltipComponent implements ITooltipAngularComp {
    constructor() {}
    private params: any;
    public data: any = {};
    private showToolTip: boolean = false;

    agInit(params): void {
        this.data.invalid = false;
        this.data.messages = [];

        const isInvalid = params.api.TRCContext.invalidRows.find((i) => i.rowIndex === params.rowIndex && i.colId === params.colDef.field);
        if (isInvalid) {
            this.data.invalid = true;
            this.data.messages = isInvalid.messages;
        } else {
            //  alert(2);
        }
        ///this.params = params;
        //debugger;
        //this.data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
        // this.data.color = this.params.color || 'white';
    }
}
