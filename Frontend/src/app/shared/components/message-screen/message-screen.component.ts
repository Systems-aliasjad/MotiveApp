import { Component, Input, OnInit } from '@angular/core';
import { ISection2Template } from '../../constants/types';

export interface IMessageSection1 {
  header: string;
  paragraphs: string[];
  span?: string;
  spanListener?: () => void;
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

  constructor() {}
  ngOnInit(): void {}
}
