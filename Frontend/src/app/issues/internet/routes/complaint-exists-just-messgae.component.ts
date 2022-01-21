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
  selector: 'complaint-exists-just-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class ComplaintExistsJustMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  referenceNo:any;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.OK',
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
    this.Section1Data = {
    header: 'MESSAGES.COMPLAINT_ALREADY_EXISTS',
   
  };
   
  }

  button1Listener() {
    this.router.navigate(['thanks']);
  }


}
