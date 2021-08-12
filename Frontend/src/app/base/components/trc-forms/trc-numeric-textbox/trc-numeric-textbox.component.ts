import { Component, OnInit, Input } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';

@Component({
    selector: 'app-trc-numeric-textbox',
    templateUrl: './trc-numeric-textbox.component.html',
    styleUrls: ['./trc-numeric-textbox.component.css'],
})
export class TrcNumericTextboxComponent extends BaseTRCFormComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit(): void {}
}
