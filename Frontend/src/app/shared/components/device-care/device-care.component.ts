import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IMotiveButton } from '../diagnose-issue/diagnose-issue.component';

export interface IDeviceCareContent {
  imgSrc: string;
  header1: string;
  header2?: string;
  body1: string;
  body2?: string;
  bullet1?: string[];
  bullet2?: string[];
}
@Component({
  selector: 'app-device-care',
  templateUrl: './device-care.component.html',
  styleUrls: ['./device-care.component.scss'],
})
export class DeviceCareComponent implements OnInit {
  selectedLang: string;
  codeType;
  myBtnSize: string;
  @Input()
  deviceCareContent: IDeviceCareContent;
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.myBtnSize = this.button3 ? '6' : '12';
  }

  button1Listener() {
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
