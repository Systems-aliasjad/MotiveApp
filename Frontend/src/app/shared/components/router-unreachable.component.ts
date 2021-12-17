import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { warningImgSrc } from '../constants/constants';
import { IMotiveButton } from '../constants/types';
import { HelperService } from '../helper/helper.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'router-unreachable',
  template: `<motive-message
     [imgSrc]="imgSrc"
      [button1]="button1" 
      (button1Click)="button1Listener()"
       [Section1Data]="Section1Data"></motive-message>`,
})
export class RouterUnreachableComponent implements OnInit {
  subscription: Subscription;
  Section1Data;
  subHeaderSectionTemplate;
  subHeaderSectionData;
  imgSrc;
  routerResetSuccessful;
  hsiPasswordReset;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService, private helperService:HelperService) {}

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

  button1Listener() {
      this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
      this.Section1Data = {
        header: 'MESSAGES.WE_CANNOT_REACH_YOUR_ROUTER',
        paragraphs: ['MESSAGES.MAKE_SURE_THAT_THE_ROUTER_IS_TURNED_ON_AND_IS_CONNECTED_TO_WALL_MOUNTED_FIBER_BOX'],
      };
  }
}
