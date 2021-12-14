import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-unable-watch-channel-step1',
  template:
    '<app-device-care [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class UnableWatchChannelStep1Component implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.RESET_TV_BOX',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.ISSUE_RESOLVED',
  };

  constructor(
    private helperService: HelperService,
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
    //this.sharedService.setHeaderConfig('HEADER.STEP_1/1', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.STEP_1/1',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.header1 = 'SUBHEADER.RESET_TV_BOX';
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.body1 = 'MESSAGES.IF_YOU_ARE_STILL_UNABLE_TO_WATCH_TAP_RESET_TV_BOX_SO_THAT_WE_CAN_RESET_IT_REMOTELY';
  }

  button1Listener() {
    this.sharedService.setLoader(true, 'MESSAGES.YOUR_TV_BOX_IS_BEING_RESET');
    this.backendService.nextSignal('Reset STB').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.QASTBSR3 || data?.result?.screenCode === flowCodes.QASTBSR4) {
        this.router.navigate(['issues/tv/tvBox-reset-successfull']);
      } else {
        this.sharedService.TicketCloseAPICallWithURL('unknown-error');
      }
      // this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });

    // this.router.navigate(['issues/tv/tvBox-reset-successfull']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
    // this.sharedService.setLoader(true);
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
    //   this.sharedService.setLoader(false);
    //   this.router.navigate(['/thanks']);
    // });
    // this.router.navigate(['/thanks']);
  }
}
