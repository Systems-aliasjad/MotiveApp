import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'package-upgrade-success-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [subHeaderSectionTemplate]="subHeaderSectionTemplate"
    [subHeaderSectionData]="subHeaderSectionData"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class PackageUpgradeSuccessMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  subHeaderSectionTemplate;
  subHeaderSectionData;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    const navigation = this.router.getCurrentNavigation();
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.packageUpgradesuccessfullyCase;
    this.subHeaderSectionTemplate = ApplicableCodes.packageUpgradeTemplate;
    this.subHeaderSectionData = { referenceNo: navigation?.extras?.state?.referenceNo };
  }

  button1Listener() {
    // this.router.navigate(['issues/internet/no-issue']);
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {});
    this.router.navigate(['/thanks']);
  }
}
