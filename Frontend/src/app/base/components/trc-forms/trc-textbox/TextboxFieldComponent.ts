import { Component, OnInit, Input } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';
@Component({
    selector: 'trc-textbox',
    templateUrl: './textbox-field.component.html',
    styleUrls: ['./textbox-field.component.css'],
    styles: [],
})
export class TRCTextboxComponent extends BaseTRCFormComponent implements OnInit {
    constructor() {
        super();
    }
    ngOnInit(): void {}
}
