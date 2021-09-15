import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

interface IRestartInstruction {
  title: string;
  steps: string[];
}
interface IExplainInstruction {
  title: string;
  body: string;
}
@Component({
  selector: 'app-restart-instruction',
  templateUrl: './restart-instruction.component.html',
  styleUrls: ['./restart-instruction.component.scss'],
})
export class RestartInstructionComponent implements OnInit {
  selectedLang: string;
  ImgSrc = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';
  ImgPath;
  codeType;
  instruction1: IRestartInstruction = {
    title: '',
    steps: [],
  };
  instruction2: IExplainInstruction = {
    title: '',
    body: '',
  };

  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.VIEW_DEVICE_CARE',
      clickListener: () => {},
      linkTo: '/device-care',
      behaviour: 'secondary',
    },
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {},
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private router: Router) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', false);
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }

  initialization() {
    if (this.codeType === ERoutingIds.tvBoxRestartRequiredManually) {
      this.ImgPath = this.ImgSrc;
      this.instruction1.title = 'INSTRUCTIONS_STEPS.TVBOX_RESTART_TITLE';
      this.instruction1.steps = ['Unplug the TV box from power', 'Wait for 30 seconds', 'Plug the TV box back to the power', 'Wait for 5 minutes', 'Try to use the TV again'];

      this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_TITLE';
      this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_BODY';
      this.sharedService.setHeaderConfig('TVBOX_RESTART.TVBOX_DIDNOT_RESTART_H1', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartManuallyButtons));
    } else if (this.codeType === ERoutingIds.routerRestart) {
      this.ImgPath = this.ImgSrc;
      this.instruction1.title = 'INSTRUCTIONS_STEPS.ROUTER_RESTART_TITLE';
      this.instruction1.steps = ['Unplug the router', 'Wait for 30 seconds', 'Plug the router back in', 'Wait for 5 mins', 'Try to use the internet again'];

      this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.ROUTER_RESTART_TITLE';
      this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.ROUTER_RESTART_BODY';
      this.sharedService.setHeaderConfig('INSTRUCTIONS_STEPS.ROUTER_RESTART_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerRestartManuallyButtons));
    }

    //ont restart manually
    else if (this.codeType === ERoutingIds.ontRestartRequiredManually) {
      this.ImgPath = this.ImgSrc;
      this.instruction1.title = 'INSTRUCTIONS_STEPS.ONT_REBOOT_TITLE';
      this.instruction1.steps = ['Unplug the fiber box from power', 'Wait for 30 seconds', 'Plug the fiber box back in', 'Wait for 5 minutes', 'Try to use the phone again'];

      this.instruction2.title = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_TITLE';
      this.instruction2.body = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_BODY';
      this.sharedService.setHeaderConfig('ONT_REBOOT_MANUALLY.ONT_REBOOT_H1', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.ontRestartManuallyButtons));
    }
  }
}
