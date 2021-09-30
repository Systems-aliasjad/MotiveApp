import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMessageSection, IMotiveButton, ISection2Template } from '../../constants/types';

@Component({
  selector: 'app-motive-message-bullet',
  templateUrl: './motive-message-bullet.component.html',
  styleUrls: ['./motive-message-bullet.component.scss'],
})
export class MotiveMessageBulletComponent implements OnInit {
  @Input()
  imgSrc: String = '';
  @Input()
  Section1Data: IMessageSection = {
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

  myBtnSize;
  ngOnInit() {
    this.myBtnSize = this.button3 ? '6' : '12';
  }

  constructor() {}

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
