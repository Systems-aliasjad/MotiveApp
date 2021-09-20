import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'router-and-package-upgrade-successful-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [subHeaderSectionTemplate]="subHeaderSectionTemplate"
    [subHeaderSectionData]="subHeaderSectionData"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class RouterAndPackageUpgradeSuccessMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  subHeaderSectionTemplate;
  subHeaderSectionData;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.Section1Data = CustomerJourneyConstants.routerPackageUpgradesuccessfullyCase;
    this.subHeaderSectionTemplate = ApplicableCodes.routerPackageUpgradeTemplate;
    this.subHeaderSectionData = {
      referenceNo: '436529873',
    };
    this.imgSrc = successImgSrc;
  }

  button1Listener() {
    this.router.navigate(['thanks']);
  }
}
