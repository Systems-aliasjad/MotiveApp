import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, infoImgSrc, OWN_ROUTER, THIRD_PARTY_ROUTER } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-access-port-thirdparty-router-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></motive-message>`,
})
export class AccessPortThirdPartyRouterMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.INSTALL_NEW_ETISALAT_ROUTER',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.INSTALL_NEW_THIRD_PARTY_ROUTER',
  };

  constructor(private backendService:BackendService, private sharedService:SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = infoImgSrc;
    this.Section1Data = CustomerJourneyConstants.installNewRouterFlow5MessageCase;
  }

  button1Listener() {
      this.sharedService.setLoader(true);
      this.backendService.installNewRouterRequest(OWN_ROUTER).subscribe((data: any) => {
        this.sharedService.setLoader(false);

         var screenCode = data?.result?.screenCode;
        if(screenCode === flowCodes.QANRINST17){
           this.router.navigate(['issues/internet/install-new-router/install-new-etisalat-router']);
         
        }else if (screenCode === flowCodes.QANRINST || screenCode === flowCodes.QANRINST9) {
          this.router.navigate(['issues/internet/router-install-successfully'], { state: { component: 'quickLinks'}});
        } else if (screenCode === flowCodes.DCSS1 || screenCode === flowCodes.DCSS2) {
          this.router.navigate(['issues/internet/install-new-router-care']);
        } else if (screenCode === flowCodes.QANRINST10){
          this.router.navigate(['issues/internet/install-new-router'])
        } else if(screenCode === flowCodes.QANRINST11 || screenCode === flowCodes.QANRINST16 || screenCode === flowCodes.QANRINST8){
          this.router.navigate(['issues/internet/router-installation-failed']);
        } else {
          this.router.navigate(['unknown-issue']);
        }
      });
  }
  button2Listener() {
      this.sharedService.setLoader(true);
      this.backendService.installNewRouterRequest(THIRD_PARTY_ROUTER).subscribe((data: any) => {
        this.sharedService.setLoader(false);

         var screenCode = data?.result?.screenCode;

         if(screenCode === flowCodes.QANRINST17){
           this.router.navigate(['issues/internet/install-new-router/continue-installing-thirdparty-router']);
         }
         else if (screenCode === flowCodes.QANRINST || screenCode === flowCodes.QANRINST9 ) {
          this.router.navigate(['issues/internet/router-install-successfully'], { state: { component: 'quickLinks'}});
        } else if (screenCode === flowCodes.DCSS1 || screenCode === flowCodes.DCSS2) {
         this.router.navigate(['issues/internet/install-new-router/install-new-thirdparty-router']);
        } else if (screenCode === flowCodes.QANRINST10){
          this.router.navigate(['issues/internet/install-new-router'])
        } else if(screenCode === flowCodes.QANRINST11 || screenCode === flowCodes.QANRINST16 || screenCode === flowCodes.QANRINST8){
          this.router.navigate(['issues/internet/router-installation-failed']);
        } else {
          this.router.navigate(['unknown-issue']);
        }
      });
  }
}
