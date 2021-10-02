import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IOntDetail, IRouterDetail, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-router-reboot-required',
  template: `<app-diagnose-issue
    [etisalatConfig]="etisalatConfig"
    [ontConfig]="ontConfig"
    [routerConfig]="routerConfig"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,
})
export class RouterRebootRequiredComponent implements OnInit, OnDestroy {
  etisalatConfig = {
    url: '/assets/images/network-map-icons/icon_smartphone_all_okay.svg',
    className: 'error',
  };
  ontConfig: IOntDetail = {
    ontSerial: '485754431E91C19B',
    ontType: 'HG8240H',
    isReachable: true,
    isRebootRequired: false,
    isUpgradeRequired: false,
  };
  routerConfig: IRouterDetail = {
    routerSerial: '109461043164',
    routerModel: 'DIR850',
    isReachable: true,
    isRebootRequired: false,
    isUpgradeRequired: false,
    isManaged: false,
    isResetRequired: false,
  };
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
    // this.getIssueTilesData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerRebootRequiredMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/router-restart']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  getIssueTilesData() {
    const navigation = this.router.getCurrentNavigation();
    console.log('===navigation?.extras?.state=========');
    console.log(navigation?.extras?.state);
    console.log('====================================');
    this.ontConfig = navigation?.extras?.state?.ontDetails;
    this.routerConfig = navigation?.extras?.state?.routerDetails;
  }
  networkDiagramStylingWrapper(ontConfig?: IOntDetail, routerConfig?: IOntDetail) {
    this.ontConfig['url'] = '/assets/images/network-map-icons/icon_smartphone_all_okay.svg';
    this.routerConfig['url'] = '/assets/images/network-map-icons/icon_smartphone_all_okay.svg';
    this.networkDiagramStylingMapper(ontConfig);
    if (ontConfig?.isReachable) {
      this.networkDiagramStylingMapper(routerConfig);
    }
  }

  networkDiagramStylingMapper(device: IOntDetail) {
    //  default
    if (device?.isReachable) {
      device['className'] = 'okay';
      if (device?.isRebootRequired) {
        device['className'] = 'pending';
      }
    } else {
      device['className'] = 'error';
    }
  }
}
