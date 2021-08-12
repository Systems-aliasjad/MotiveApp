import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { TRCGridComponent } from '../trc-grid/trcgrid.component';
import { ITRCToolbarConfig } from '../trc-toolbar/ITRCToolbarConfig';
import { TrcToolbarComponent } from '../trc-toolbar/trc-toolbar.component';

@Component({
    selector: 'trc-grid-toolbar',
    templateUrl: './trc-grid-toolbar.component.html',
    styleUrls: ['./trc-grid-toolbar.component.css']
})
export class TrcGridToolbarComponent implements OnInit {
    @Input() hideToolbar: boolean = false;
    @Input() hideSearch: boolean = false;
    @Input() TRCGrid: TRCGridComponent;
    @Input() toolbar: ITRCToolbarConfig[];
    @Output() buttonClicked: any = new EventEmitter<any>();
    @ViewChild('trctoolbar') TrcToolbar:TrcToolbarComponent;
    constructor() {}
    ngOnInit(): void {
        if (!this.toolbar || this.toolbar.length == 0) {
            // toolbar Configuraiton;
            this.toolbar = [
                {
                    label: 'Delete',
                    iconUrl: '',
                    icon: 'delete',
                    cssClass: '',
                    cssStyle: {},
                    listener: $params => {
                        this.TRCGrid.delete();
                    }
                },
                {
                    label: 'Add',
                    iconUrl: '',
                    icon: 'add_circle_outline',
                    cssClass: '',
                    cssStyle: {},
                    listener: $params => {
                        this.TRCGrid.add();
                    }
                },
                {
                    label: 'Save Changes',
                    iconUrl: '',
                    icon: 'save',
                    cssClass: '',
                    cssStyle: {},
                    listener: $params => {
                        this.TRCGrid.saveChanges();
                    }
                },
                {
                    label: 'Reset',
                    iconUrl: '',
                    icon: 'undo',
                    cssClass: '',
                    cssStyle: {},
                    listener: $params => {
                        this.TRCGrid.undoChanges();
                    }
                }
            ];
        }
    }
    public updateToolbar(toolbarConfig:Array<ITRCToolbarConfig>){
      this.TrcToolbar.updateToolbar(toolbarConfig);
    }
}
