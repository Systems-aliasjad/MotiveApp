import { Component, OnInit } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';

@Component({
  selector: 'trc-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent extends BaseTRCFormComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
