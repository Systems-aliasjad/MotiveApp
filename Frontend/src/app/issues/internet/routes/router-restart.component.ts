import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExplainInstruction, IRestartInstruction } from 'src/app/shared/components/restart-instruction/restart-instruction.component';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-router-restart',
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
export class RouterRestartComponent implements OnInit {
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
    this.instruction1.title = 'ROUTER_RESTART.RESTART_ROUTER_H2';
    this.instruction1.steps = [
      'Unplug both router & modem',
      'Wait at least 30 seconds',
      'Plug the modem back in',
      'Wait at least 60 seconds',
      'Plug the router back in',
      'Wait at least 2 minutes',
      'Test to see if the problem went away',
    ];
    this.instruction2.title = 'ROUTER_RESTART.RESTART_ROUTER_H3';
    this.instruction2.body = 'MESSAGES.ETISALAT_DEVICE_CARE_GIVES_YOU_PRECISE_INSTRUCTIONS_SPECIFIC_FOR_YOUR_DEVICE';
    this.sharedService.setHeaderConfig('ROUTER_RESTART.RESTART_ROUTER_H1', false);
  }

  button1Listener() {
    this.router.navigate(['/device-care']);
  }
  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
