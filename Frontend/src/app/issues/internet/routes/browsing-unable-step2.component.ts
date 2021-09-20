import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDeviceCareContent } from 'src/app/shared/components/device-care/device-care.component';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-browsing-unable-step2',
  template:
    '<app-device-care [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class BrowsingUnableStep2Component implements OnInit, OnDestroy {
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
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
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
    this.sharedService.setHeaderConfig('HEADER.STEP_2/3', true);
  }

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.header1 = 'SUBHEADER.CHECK_YOUR_NETWORK_SETTING';
    this.careContent.body1 =
      'MESSAGES.SELECT_THE_OPERATING_SYSTEM_AND_TYPE_OF_CONNECTIVITY_(WI-FI_OR_LAN_CABLE)_FROM_THE_DROP-DOWN_MENU_IN_ORDER_TO_LEARN_MORE_ABOUT_DNS_CONFIGURATION';
    this.careContent.body2 = 'MESSAGES.PLEASE_MAKE_SURE_THAT_YOUR_PC/LAPTOP_BROWSER_IS_CONFIGURED_WITH_THE_CORRECT_DNS_SETTINGS';
  }

  button1Listener() {
    // TODO: troubleshoot-complete
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/unable-to-browse-internet/step3']);
  }
}
