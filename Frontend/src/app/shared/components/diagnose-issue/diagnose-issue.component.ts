import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NetWorkDiagramIds } from '../../constants/constants';
import { IMotiveButton, IOntDetail, IRouterDetail, IPageHeader } from '../../constants/types';

@Component({
  selector: 'app-diagnose-issue',
  templateUrl: './diagnose-issue.component.html',
  styleUrls: ['./diagnose-issue.component.scss'],
})
export class DiagnoseIssueComponent implements OnInit {
  @Input()
  stbSerialNumber: string;

  @Input()
  networkDiagram: NetWorkDiagramIds;

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

  @Input()
  button4: IMotiveButton;
  @Output()
  button4Click = new EventEmitter();

  @Input()
  messageSection;

  @Input()
  section1Template;
  @Input()
  section1Data;
  @Input()
  ontConfig: IOntDetail;
  @Input()
  routerConfig: IRouterDetail;
  @Input()
  etisalatConfig;
  @Input()
  connectedDevices;

  myBtnSize;

  @Input()
  headerConfig: IPageHeader;
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

  button4Listener() {
    this.button4Click.emit();
  }
}
