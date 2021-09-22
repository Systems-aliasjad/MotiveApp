import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { IMotiveButton } from '../diagnose-issue/diagnose-issue.component';

export interface IRestartInstruction {
  title: string;
  steps: string[];
}
export interface IExplainInstruction {
  title: string;
  body: string;
}
@Component({
  selector: 'app-restart-instruction',
  templateUrl: './restart-instruction.component.html',
  styleUrls: ['./restart-instruction.component.scss'],
})
export class RestartInstructionComponent implements OnInit {
  @Input()
  ImgSrc: string = '';
  @Input()
  instruction1: IRestartInstruction;

  @Input()
  instruction2: IExplainInstruction;

  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  button1Listener() {
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }

  constructor(private sharedService: SharedService, private router: Router) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', false);
  }

  ngOnInit() {}
}
