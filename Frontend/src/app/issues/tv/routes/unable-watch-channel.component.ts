import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader, IRestartInstruction } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-unable-watch-channel',
  template: `<app-restart-instruction
    [ImgSrc]="ImgSrc"
    [instruction1]="instruction1"
    [headerConfig]="headerConfig"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-restart-instruction>`,
})
export class UnableWatchChannelComponent implements OnInit {
  instruction1: IRestartInstruction = {
    title: '',
    steps: [],
  };
  ImgSrc = SVGs.stb.default;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.updatePageContent();
  }

  updatePageContent() {
    this.instruction1.title = 'MESSAGES.TV_BOX_TROUBLESHOOTING_GUIDELINES';
    this.instruction1.steps = [
      'MESSAGES.PLUG_THE_TV_BOX_TO_TURN_IT_ON_AND_WAIT_FOR_THE_LED_TO_TURN_RED',
      'MESSAGES.PRESS_THE_POWER_BUTTON_ON_YOUR_REMOTE_CONTROL',
      'MESSAGES.IF_YOU_ARE_UNABLE_TO_TURN_THE_TV_BOX_ON_CHECK_THE_BATTERY_OF_THE_REMOTE_CONTROL',
      'MESSAGES.IF_TV_BOX_WORKS_BUT_YOU_ARE_UNABLE_TO_WATCH_A_CHANNEL_CHECK_WHETHER_THE_CABLE_FROM_TV_BOX_IS_CONNECTED_TO_X_PORT_OF_THE_OPTICAL_NETWORK_TERMINAL_ONT',
    ];

    // this.messageSection = CustomerJourneyConstants.unableWatchChannelsMessageSection;
    // this.sharedService.setHeaderConfig('MESSAGES.UNALBE_TO_WATCH_CHANNELS', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.UNALBE_TO_WATCH_CHANNELS',
    showBackBtn: true,
  };

  button1Listener() {
   this.sharedService.TicketCloseAPICallWithURL('thanks');
    // this.sharedService.setLoader(true);
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
    //   this.sharedService.setLoader(false);
    //   this.router.navigate(['/thanks']);
    // });
  }

  button2Listener() {
    this.sharedService.setLoader(true);
    this.backendService.serviceDetailsSTB().subscribe((data)=>{
      this.sharedService.setLoader(false);
      if(data?.code === 200){
        this.router.navigate(['/issues/tv/unable-watch-channel/step1']);
      }
    })
  }
}
