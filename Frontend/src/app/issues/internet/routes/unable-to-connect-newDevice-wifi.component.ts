import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { IUnableToConnectContent } from '../shared/unable-to-connect/unable-to-connect.component';

@Component({
  selector: 'unable-to-connect-newDevice-wifi',
  template: `<app-unable-to-connect
    [headerConfig]="headerConfig"
    [unableToConnectContent]="content"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-unable-to-connect>`,
})
export class UnableToConnectNewDeviceWiFiComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  content: IUnableToConnectContent = new IUnableToConnectContent();

  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'link',
  };

  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.updatePageContent();
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_CONNECT_NEW_DEVICE_TO_WIFI', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.UNABLE_TO_CONNECT_NEW_DEVICE_TO_WIFI',
    showBackBtn: true,
  };

  updatePageContent() {
    this.content.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.content.listItems = [
      { text: 'MESSAGES.MAKE_SURE_THAT_YOU_CAN_SEE_YOUR_WIFI_NETWORK_TRY_TO_STAND_CLOSER_TO_THE_ROUTER', children: [] },
      { text: 'MESSAGES.MAKE_SURE_THAT_YOU_HAVE_THE_CORRECT_WIFI_PASSWORD', children: [] },
      { text: 'MESSAGES.SEARCH_FOR_AVAILABLE_WIFI_NETWORKS_FROM_YOUR_DEVICE', children: [] },
      { text: 'MESSAGES.CONNECT_TO_YOUR_WIFI_NETWORK_BY_VERIFYING_THE_NAME_AND_ENTERING_THE_CORRECT_PASSWORD', children: [] },
      { text: 'MESSAGES.SELECT_THE_DEVICE_TYPE_AND_OPERATING_SYSTEM_TO_LEARN_HOW_TO_CONNECT_YOUR_DEVICE_TO_THE_WIFI_NETWORK', children: [] },
    ];
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    // this.router.navigate(['issues/internet/book-complaint']);
    this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
  }
}
