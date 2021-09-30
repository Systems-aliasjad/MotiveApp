import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDeviceCareContent, IMotiveButton } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-browsing-unable-step3',
  template:
    '<app-device-care [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class BrowsingUnableStep3Component implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.BOOK_A_COMPLAINT',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.sharedService.setHeaderConfig('HEADER.STEP_3/3', true);
  }

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.header1 = 'SUBHEADER.CHECK_YOUR_FIREWALL_SETTING';
    this.careContent.body1 = 'MESSAGES.PLEASE_MAKE_SURE_THAT_YOUR_PC_LAPTOP_FIREWALL_IS_NOT_BLOCKING_YOUR_INTERNET';
  }

  button1Listener() {
    // TODO: troubleshoot-complete
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/bookComplaint']);
  }
}
