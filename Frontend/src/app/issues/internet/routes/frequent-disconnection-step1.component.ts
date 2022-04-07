import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-frequent-disconnection-step1',
  template:
    '<app-device-care [IsBulletList]="true" [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class FrequentDisconnectionStep1Component implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: '',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.WIFI',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.ETHERNET_LAN_CABLE',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private backendService: BackendService) {}

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
    //this.sharedService.setHeaderConfig('HEADER.STEP_1/3', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: '',//'HEADER.STEP_1/3',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    //this.careContent.header1 = 'SUBHEADER.CHECK_YOUR_BROWSER_SETTING';
    this.careContent.body1 = 'MESSAGES.PLEASE_SELECT_THE_CONNECTION_TYPE_YOU_ARE_USING_ON_YOUR_DEVICE';
     this.careContent.bullet2 = ['MESSAGES.WIFI', 'MESSAGES.ETHERNET_LAN_CABLE'];
  
  }

  button1Listener() {
      this.router.navigate(['/issues/internet/frequent-disconnection-wifi-step1']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/frequent-disconnection-ethernet-step1']);
  }
}
