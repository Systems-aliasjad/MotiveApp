import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * Service Unavailable
 */
@Component({
  selector: 'app-service-unavailable',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class ServiceUnavailableComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
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

  updateHeader() {
    this.sharedService.setHeaderConfig('', false, false);
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.serviceUnavailable;
    this.Section2Template = ApplicableCodes.serviceUnavailableTemplate;
    this.Section1Data?.paragraphs.push('xx/xx/xxxx');
    // this.Section2Data = {
    //   expecDateOfCompletion: 'xx/xx/xxxx',
    // };
  }

  button1Listener() {
    //this.router.navigate(['/']);
  }
}
