import { Component, OnInit } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';

@Component({
  selector: 'trc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends BaseTRCFormComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
