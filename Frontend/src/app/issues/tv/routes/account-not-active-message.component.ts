import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'account-not-active-message',
  template: `<motive-message [imgSrc]="imgSrc" [Section1Data]="Section1Data" [button1]="button1" (button1Click)="button1Listener()"></motive-message>`,
})
export class AccountNotActiveMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

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
    let url;
    const accountNo = this.sharedService.getLocalStorage('CUS_MOBILE_NO');
    const lang: string = this.sharedService.getDefaultLanguage();
    if(this.sharedService.checkIfMobileDevice()) {
      url = 'https://etisalatmobileapp.page.link/ebill';
    } else {
      if (lang === 'ara') {
        url = `https://www.etisalat.ae/b2c/eLife-accounts-and-services.html?accountid=EDSACC${accountNo}&accounttype=POSTPAID&locale=ar`;
      } else {
        url = `https://www.etisalat.ae/b2c/eLife-accounts-and-services.html?accountid=EDSACC${accountNo}&accounttype=POSTPAID`;
      }
    }
    this.Section1Data = CustomerJourneyConstants.accountNotActive;
    this.Section1Data.spanListener = () => {
      window.location.href = url;
    };
    this.imgSrc = warningImgSrc;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
