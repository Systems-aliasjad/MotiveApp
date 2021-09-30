import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExplainInstruction, IMotiveButton, IRestartInstruction } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-box-not-restarted-instruction',
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
export class BoxNotRestartedInstructionsComponent implements OnInit, OnDestroy {
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
    this.sharedService.setHeaderConfig('MESSAGES.YOUR_TV_BOX_DIDNT_RESTART', false);
  }

  updatePageContent() {
    this.instruction1.title = 'MESSAGES.FOLLOW_THESE_STEPS';
    this.instruction1.steps = ['Unplug the TV box from power', 'Wait for 30 seconds', 'Plug the TV box back to the power', 'Wait for 5 minutes', 'Try to use the TV again'];
    this.instruction2.title = 'MESSAGES.VISIT_DEVICE_CARE';
    this.instruction2.body = 'MESSAGES.WHERE_YOU_CAN_FIND_MORE_DETAILS_ON_HOW_TO_RESTART_YOUR_TV_BOX';
  }

  button1Listener() {
    this.router.navigate(['/issues/tv/box-not-restarted-instructions/device-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
