import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITRCToolbarConfig } from './ITRCToolbarConfig';

@Component({
    selector: 'trc-toolbar',
    templateUrl: './trc-toolbar.component.html',
    styleUrls: ['./trc-toolbar.component.css']
})
export class TrcToolbarComponent implements OnInit {
    constructor() {}
    @Input() toolbar: Array<ITRCToolbarConfig> = [];
    @Output() buttonClicked: any = new EventEmitter<any>();
    enabledToolbar: boolean = true;
    ngOnInit(): void {}
    onButtonClicked($event) {
        this.buttonClicked.emit($event);
    }
    public updateToolbar(toolbarConfig: Array<ITRCToolbarConfig>) {
        console.log(toolbarConfig);
        if (!this.toolbar || !toolbarConfig) return;
        toolbarConfig.forEach(tool => {
            let findTool: any = this.toolbar.find(i => i.id == tool.id);
            if (findTool) {
                for (let i in tool) {
                    if (findTool.hasOwnProperty(i)) {
                        findTool[i] = tool[i];
                    }
                }
            }
        });
    }
}
