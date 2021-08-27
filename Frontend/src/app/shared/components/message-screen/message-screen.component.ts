import { Component, Input, OnInit } from '@angular/core';
import { ISection2Template } from '../../constants/constants';

export interface IMessageSection1 {
  header: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-message-screen',
  templateUrl: './message-screen.component.html',
  styleUrls: ['./message-screen.component.scss'],
})
export class MessageScreenComponent implements OnInit {
  @Input()
  imgSrc: String = '';
  @Input()
  Section1Data: IMessageSection1 = {
    header: '',
    paragraphs: null,
  };
  @Input()
  Section2Data: any;
  @Input()
  Section2Template: ISection2Template[];
  @Input()
  followUpButton: Boolean = false;
  @Input()
  exitTroubleshootLink: Boolean = false;
  @Input()
  closeButton: Boolean = false;
  @Input()
  followupComplain: Boolean = false;
  @Input()
  anotherComplainLink: Boolean = false;

  constructor() {}
  ngOnInit(): void {}
}
