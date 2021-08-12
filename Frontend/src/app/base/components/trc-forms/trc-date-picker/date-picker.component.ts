import { Component, OnInit } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';

@Component({
  selector: 'trc-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent extends BaseTRCFormComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
