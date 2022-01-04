import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, LoaderScriptsEnum, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
  selector: 'complaint-exists-message',
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
export class ComplaintExistsMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  referenceNo:any;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.YES',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.NO_I_WANT_TO_REPORT_ANOTHER_ISSUE',
  };
  constructor( private helperService:HelperService, private backendService:BackendService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updatePageContent();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updatePageContent() {
    const apiResponse = this.sharedService.getApiResponseData();
    this.imgSrc = warningImgSrc;
    this.Section2Template = ApplicableCodes.openServiceRequestTemplateCompliant;
    this.Section1Data = CustomerJourneyConstants.complaintExistsCase1;
    const temp = this.sharedService.getApiResponseData();

    this.referenceNo= temp?.referenceNo;
    this.Section2Data = {
     
      complaintNo: temp?.referenceNo ?? '-',
      dateVisit: temp?.dateOfVisit ?? '-',
      status: temp?.status ?? '-',
    };
  }

  button1Listener() {
    this.router.navigate(['issues/internet/complaint-under-process-message'], { state: { referenceNo: this.referenceNo } });
  }

  button2Listener() {
      var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.INTERNET_E2E_TROUBLESHOOTING);
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.nextSignal('Continue Troubleshooting').subscribe((data: any) => {
        this.sharedService.setLoader(false);
        this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
        this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
  }
}
