import { Component, Input, OnInit } from '@angular/core';

export interface IMessageSection1 {
  header: String;
  paragraphs: String[];
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
  followUpButton: Boolean = false;
  @Input()
  exitTroubleshootLink: Boolean = false;
  @Input()
  closeButton: Boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
