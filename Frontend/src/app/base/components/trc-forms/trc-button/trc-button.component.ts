import { Component, OnInit } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';

@Component({
    selector: 'app-trc-button',
    templateUrl: './trc-button.component.html',
    styleUrls: ['./trc-button.component.css'],
})
export class TrcButtonComponent extends BaseTRCFormComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit(): void {}
}
