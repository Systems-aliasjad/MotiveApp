import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExplainInstruction, IRestartInstruction } from 'src/app/shared/components/restart-instruction/restart-instruction.component';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-box-not-restart-instruction',
  template: `<app-restart-instruction
    [ImgSrc]="ImgSrc"
    [instruction1]="instruction1"
    [instruction2]="instruction2"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></app-restart-instruction>`,
})
export class BoxNotRestartInstructionsComponent implements OnInit {
  ImgSrc: string = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';
  instruction1: IRestartInstruction = {
    title: '',
    steps: [],
  };
  instruction2: IExplainInstruction = {
    title: '',
    body: '',
  };
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.VIEW_DEVICE_CARE',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private sharedService: SharedService, private router: Router) {}
  RESTART_ROUTER_H2;
  ngOnInit() {
    this.instruction1.title = 'INSTRUCTIONS_STEPS.TVBOX_RESTART_TITLE';
    this.instruction1.steps = ['Unplug the TV box from power', 'Wait for 30 seconds', 'Plug the TV box back to the power', 'Wait for 5 minutes', 'Try to use the TV again'];

    this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_TITLE';
    this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_BODY';
    this.sharedService.setHeaderConfig('TVBOX_RESTART.YOUR_TVBOX_DID_NOT_RESTART_H1', false);
  }

  button1Listener() {
    this.router.navigate(['/tvBox-restart-required-device-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
