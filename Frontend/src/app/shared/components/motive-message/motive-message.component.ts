import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISection2Template } from '../../constants/types';
import { IMotiveButton } from '../diagnose-issue/diagnose-issue.component';

export interface IMessageSection1 {
  header: string;
  paragraphs: string[];
  span?: string;
  spanListener?: () => void;
}

@Component({
  selector: 'motive-message',
  templateUrl: './motive-message.component.html',
  styleUrls: ['./motive-message.component.scss'],
})
export class MotiveMessageComponent implements OnInit {
  @Input()
  imgSrc: String = '';
  @Input()
  Section1Data: IMessageSection1 = {
    header: '',
    paragraphs: null,
    span: '',
    spanListener: () => {},
  };
  @Input()
  Section2Data: any;
  @Input()
  Section2Template: ISection2Template[];
  @Input()
  subHeaderSectionData: any;
  @Input()
  subHeaderSectionTemplate: ISection2Template[];

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

  myBtnSize
ngOnInit() {
    this.myBtnSize = this.button3 ? '6' : '12'
  }

  constructor() {}
 /*  ngOnInit(): void {} */

  button1Listener() {
    this.button1Click.next({ bubbles: false });
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
