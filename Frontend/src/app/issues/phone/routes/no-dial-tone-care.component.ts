import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-no-dail-tone-care',
  template:
    '<app-device-care [IsBulletList]="true" [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class NoDailToneCareComponent implements OnInit {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_RESOLVED',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.REQUEST_SUPPORT',
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
    // this.sharedService.setHeaderConfig('HEADER.NO_DIAL_TONE', true);
  }

  updatePageContent() {
    this.careContent.header1 = 'SUBHEADER.PHONE_TROUBLESHOOTING_GUIDELINES';
    this.careContent.bullet1 = [
      'MESSAGES.MAKE_SURE_THE_CABLE_FROM_THE_PHONE_IS_CONNECTED_TO_“X”_PORT_OF_THE_OPTICAL_NETWORK_TERMINAL_(ONT)',
      'MESSAGES.CHECK_THE_BATTERY_OF_THE_CORDLESS_PHONE',
    ];
    this.careContent.header2 = 'SUBHEADER.CALL_DETAILS';
    this.careContent.bullet2 = ['MESSAGES.LAST_INCOMING_OUTGOING_CALLS', 'MESSAGES.CALL_FORWARDING_ENABLED_OR_DISABLED', 'MESSAGES.OPTION_TO_ENABLE_DISABLE_CALL_FORWARDING'];
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.NO_DIAL_TONE',
    showBackBtn: true,
  };

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    // this.router.navigate(['issues/phone/book-complaint']);
    this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
  }
}
