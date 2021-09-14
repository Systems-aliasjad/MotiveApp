import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface IMotiveButton {
  type: 'link' | 'primary' | 'secondary';
  title: string;
  explanatoryNote?: string;
  SM?: string;
  MD?: string;
  LG?: string;
}

@Component({
  selector: 'app-diagnose-issue',
  templateUrl: './diagnose-issue.component.html',
  styleUrls: ['./diagnose-issue.component.scss'],
})
export class DiagnoseIssueComponent implements OnInit {
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
  messageSection;

  constructor() {}

  ngOnInit() {}

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
