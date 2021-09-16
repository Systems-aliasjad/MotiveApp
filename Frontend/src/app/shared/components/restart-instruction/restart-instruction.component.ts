import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ERoutingIds } from '../../constants/constants';
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

  initialization() {
    if ((this as any) === ERoutingIds.tvBoxRestartRequiredManually) {
      this.instruction1.title = 'INSTRUCTIONS_STEPS.TVBOX_RESTART_TITLE';
      this.instruction1.steps = ['Unplug the TV box from power', 'Wait for 30 seconds', 'Plug the TV box back to the power', 'Wait for 5 minutes', 'Try to use the TV again'];

      this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_TITLE';
      this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_BODY';
      this.sharedService.setHeaderConfig('TVBOX_RESTART.TVBOX_DIDNOT_RESTART_H1', false);
      // this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartManuallyButtons));
    }
    // router didnot restarted
    // else if ((this as any) === ERoutingIds.routerRestart) {
    //   this.instruction1.title = 'INSTRUCTIONS_STEPS.ROUTER_RESTART_TITLE';
    //   this.instruction1.steps = ['Unplug the router', 'Wait for 30 seconds', 'Plug the router back in', 'Wait for 5 mins', 'Try to use the internet again'];

    //   this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.ROUTER_RESTART_TITLE';
    //   this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.ROUTER_RESTART_BODY';
    //   this.sharedService.setHeaderConfig('INSTRUCTIONS_STEPS.ROUTER_RESTART_TITLE', false);
    //   this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerRestartManuallyButtons));
    // }

    //ont restart manually
    else if ((this as any) === ERoutingIds.ontRestartRequiredManually) {
      this.instruction1.title = 'INSTRUCTIONS_STEPS.ONT_REBOOT_TITLE';
      this.instruction1.steps = ['Unplug the fiber box from power', 'Wait for 30 seconds', 'Plug the fiber box back in', 'Wait for 5 minutes', 'Try to use the phone again'];

      this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_TITLE';
      this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_BODY';
      this.sharedService.setHeaderConfig('ONT_REBOOT_MANUALLY.ONT_REBOOT_H1', false);
      // this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.ontRestartManuallyButtons));
    }
  }
}
