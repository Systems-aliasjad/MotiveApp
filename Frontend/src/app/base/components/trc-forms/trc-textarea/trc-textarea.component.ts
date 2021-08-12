import { Component, OnInit } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';

@Component({
    selector: 'trc-textarea',
    templateUrl: './trc-textarea.component.html',
    styleUrls: ['./trc-textarea.component.scss'],
})
export class TrcTextareaComponent extends BaseTRCFormComponent implements OnInit {
    constructor() {
        super();
    }
    ngOnInit(): void {}
}
