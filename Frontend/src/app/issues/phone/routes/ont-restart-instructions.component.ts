import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExplainInstruction, IRestartInstruction } from 'src/app/shared/components/restart-instruction/restart-instruction.component';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-ont-restart-instruction',
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
export class OntRestartInstructionsComponent implements OnInit {
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
    type: 'primary',
    title: 'BUTTONS.VIEW_DEVICE_CARE',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private sharedService: SharedService, private router: Router) {}
  RESTART_ROUTER_H2;
  ngOnInit() {
    this.instruction1.title = 'INSTRUCTIONS_STEPS.ONT_REBOOT_TITLE';
    this.instruction1.steps = ['Unplug the fiber box from power', 'Wait for 30 seconds', 'Plug the fiber box back in', 'Wait for 5 minutes', 'Try to use the phone again'];

    this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_TITLE';
    this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_BODY';
    this.sharedService.setHeaderConfig('ONT_REBOOT_MANUALLY.ONT_REBOOT_H1', false);
  }

  button1Listener() {
    this.router.navigate(['/ont-restart-required-device-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
