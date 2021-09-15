import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-router-restart',
  templateUrl: './router-restart.component.html',
  styleUrls: ['./router-restart.component.scss'],
})
export class RouterRestartComponent implements OnInit, OnDestroy {
  selectedLang: string;
  ImgSrc = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';
  ImgPath;
  codeType;
  headerTitle;
  instructionHeaderTitle;
  instructionStepsTitle;
  instructionStepsBody;
  instructionsOR;
  instructionsORTitle;
  instructionsORBody;
  subscription: Subscription;
  instructionList: string[];
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

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, public router: Router) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', false);

    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    if (this.codeType === ERoutingIds.tvBoxRestartRequiredManually) {
      this.ImgPath = this.ImgSrc;
      this.headerTitle = 'TVBOX_RESTART.TVBOX_DIDNOT_RESTART_H1';
      this.instructionHeaderTitle = 'TVBOX_RESTART.TVBOX_DIDNOT_RESTART_H1';
      this.instructionStepsTitle = 'INSTRUCTIONS_STEPS.TVBOX_RESTART_TITLE';
      this.instructionsOR = 'INSTRUCTIONS_STEPS.OR';
      this.instructionsORTitle = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_TITLE';
      this.instructionsORBody = 'INSTRUCTIONS_STEPS_OR.TVBOX_RESTART_BODY';
      this.instructionList = ['Unplug the TV box from power', 'Wait for 30 seconds', 'Plug the TV box back to the power', 'Wait for 5 minutes', 'Try to use the TV again'];

      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartManuallyButtons));
    } else if (this.codeType === ERoutingIds.routerRestart) {
      this.headerTitle = 'ROUTER_RESTART.ROUTER_DIDNOT_RESTART_H1';
      //this.selectedLang = this.sharedService.getDefaultLanguage();
      this.ImgPath = this.ImgSrc;
      this.instructionHeaderTitle = 'ROUTER_RESTART.ROUTER_DIDNOT_RESTART_H1';
      this.instructionStepsTitle = 'INSTRUCTIONS_STEPS.ROUTER_RESTART_TITLE';
      this.instructionsOR = 'INSTRUCTIONS_STEPS.OR';
      this.instructionsORTitle = 'INSTRUCTIONS_STEPS_OR.ROUTER_RESTART_TITLE';
      this.instructionsORBody = 'INSTRUCTIONS_STEPS_OR.ROUTER_RESTART_BODY';
      this.instructionList = ['Unplug the router', 'Wait for 30 seconds', 'Plug the router back in', 'Wait for 5 mins', 'Try to use the internet again'];
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerRestartManuallyButtons));
    }

    //ont restart manually
    else if (this.codeType === ERoutingIds.ontRestartRequiredManually) {
      this.ImgPath = this.ImgSrc;
      this.headerTitle = 'ONT_REBOOT_MANUALLY.ONT_REBOOT_H1';
      this.instructionHeaderTitle = 'ONT_REBOOT_MANUALLY.ONT_REBOOT_H1';
      this.instructionStepsTitle = 'INSTRUCTIONS_STEPS.ONT_REBOOT_TITLE';
      this.instructionsOR = 'INSTRUCTIONS_STEPS.OR';
      this.instructionsORTitle = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_TITLE';
      this.instructionsORBody = 'INSTRUCTIONS_STEPS_OR.ONT_RESTART_BODY';
      this.instructionList = ['Unplug the fiber box from power', 'Wait for 30 seconds', 'Plug the fiber box back in', 'Wait for 5 minutes', 'Try to use the phone again'];

      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.ontRestartManuallyButtons));
    }

    // this.selectedLang = this.sharedService.getDefaultLanguage();
    // this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', false);
    // this.sharedService.setButtonConfig(this.buttonsConfig);
    // this.sharedService.setButtonSize({ SM: '12', MD: '6', LG: '6' });
  }
}
