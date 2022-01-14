import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
  selector: 'open-service-request-message',
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
export class OpenServiceRequestMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
   
  };

  button1: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'primary',
  };

  constructor(private helperService:HelperService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService, private backendService: BackendService) {}

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
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.OpenTechnicalSR;
    this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
    // this.Section2Data = {
    //   reqNo: '436529873',
    //   reqType: 'Xxxxx xxxxx xxxx',
    //   dateVisit: 'Jul 10 2019, 10:30 AM',
    //   status: 'Xxxxx xxxxx xxxx',
    // };

    const temp = this.sharedService.getApiResponseData();
    this.Section2Data = {
      reqNo: temp?.referenceNo ?? '-',
      reqType: temp?.requestType ?? '-',
      dateVisit: temp?.dateOfVisit ?? '-',
      status: temp?.status ?? '-',
    };
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  button1Listener() {
     this.sharedService.setLoader(true);
    this.backendService.nextSignal('Technical').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
      this.helperService.voiceFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }
}
