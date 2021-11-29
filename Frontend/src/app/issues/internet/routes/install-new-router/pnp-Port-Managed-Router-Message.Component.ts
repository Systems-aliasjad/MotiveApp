import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, infoImgSrc, THIRD_PARTY_ROUTER } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-pnp-port-managed-router-message',
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
//PnpPortManagedRouterMessageComponent
export class PnpPortManagedRouterMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE_WITH_ETISALAT_ROUTERR',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.INSTALL_THIRD_PARTY_ROUTER',
  };

  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedServices: SharedService
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
    this.sharedServices.setHeaderConfig('', false, false);
  }

  updatePageContent() {
    this.imgSrc = infoImgSrc;
    this.Section1Data = CustomerJourneyConstants.installNewRouterFlow2MessageCase;
  }

  button1Listener() {
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {});
    this.router.navigate(['/thanks']);
  }
  button2Listener() {
    //this.router.navigate(['/issues/internet/install-new-router/install-new-thirdparty-router']);

    this.sharedService.setLoader(true);
    this.backendService.installNewRouterRequest(THIRD_PARTY_ROUTER).subscribe((data: any) => {
      this.sharedService.setLoader(false);

      var screenCode = data?.result?.screenCode;

      if (screenCode === flowCodes.QANRINST) {
        this.router.navigate(['issues/internet/router-install-successfully']);
      } else if (screenCode === flowCodes.DCSS1 || screenCode === flowCodes.DCSS2 || screenCode === flowCodes.QANRINST12) {
        this.router.navigate(['issues/internet/install-new-router-care']);
      } else {
        this.router.navigate(['issues/internet/router-installation-failed']);
      }
    });
  }
}
