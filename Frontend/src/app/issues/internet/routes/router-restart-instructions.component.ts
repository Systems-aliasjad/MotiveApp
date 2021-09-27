import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExplainInstruction, IRestartInstruction } from 'src/app/shared/components/restart-instruction/restart-instruction.component';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { SharedService } from 'src/app/shared/shared.service';
import { Subscription } from 'rxjs';

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
export class RouterRestartInstructionsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
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

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    this.sharedService.setHeaderConfig('MESSAGES.RESTART_ROUTER', false);
  }

  updatePageContent() {
    this.instruction1.title = 'MESSAGES.YOU_CAN_FOLLOW_THESE_STEPS_TO_REBOOT_YOUR_ROUTER';
    this.instruction1.steps = [
      'Unplug both router & modem',
      'Wait at least 30 seconds',
      'Plug the modem back in',
      'Wait at least 60 seconds',
      'Plug the router back in',
      'Wait at least 2 minutes',
      'Test to see if the problem went away',
    ];
    this.instruction2.title = 'MESSAGES.CONSULT_DEVICE_CARE_FOR_SPECIFIC_DEVICE_GUIDES';
    this.instruction2.body = 'MESSAGES.ETISALAT_DEVICE_CARE_GIVES_YOU_PRECISE_INSTRUCTIONS_SPECIFIC_FOR_YOUR_DEVICE';
  }

  button1Listener() {
    this.router.navigate(['issues/internet/router-restart/device-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
