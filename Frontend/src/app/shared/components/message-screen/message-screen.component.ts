import { Component, Input, OnInit } from '@angular/core';

export interface IMessageSection1 {
  header: string;
  paragraphg: string;
}
@Component({
  selector: 'app-message-screen',
  templateUrl: './message-screen.component.html',
  styleUrls: ['./message-screen.component.scss'],
})
export class MessageScreenComponent implements OnInit {
  @Input()
  imgSrc: string;
  @Input()
  Section1Data: IMessageSection1;
  @Input()
  Section2Data: any;
  @Input()
  followUpButton: boolean;
  @Input()
  exitTroubleshootLink: boolean;
  @Input()
  closeButton: boolean;
  constructor() {}
  ngOnInit(): void {}
}
