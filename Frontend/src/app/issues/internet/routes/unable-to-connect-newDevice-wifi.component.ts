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
      { text: 'Make sure that you can see your Wi-Fi network (try to stand closer to the router)', children: [] },
      { text: 'Make sure that you have the correct Wi-Fi password', children: [] },
      { text: 'Search for available Wi-Fi networks from your device', children: [] },
      { text: 'Connect to your Wi-Fi network by verifying the name and entering the correct password', children: [] },
      { text: 'Select the device type and operating system to learn how to connect your device to the Wifi network', children: [] },
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
