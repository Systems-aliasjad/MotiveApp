import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton, IMessageIssue } from '../shared/constants/types';
import { DeviceListDialog } from '../shared/dialogs/device-list-dialog/device-list-dialog.component';
import { SharedService } from '../shared/shared.service';
import { ResetFactoryDefaultDialog } from '../shared/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
import { InternetIssuesDialog } from '../shared/dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { EIssueFlow, IssueListDialog } from '../shared/dialogs/issue-list-dialog/issue-list-dialog.component';

@Component({
  selector: 'app-issue-builder',
  templateUrl: './issue-builder.component.html',
  styleUrls: ['./issue-builder.component.scss'],
})
export class IssueBuilderComponent implements OnInit {
  codeType;
  modal: any;
  btnConfig: IButton[] = [];
  messageSection: IMessageIssue;

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  async openInternetIssueDialog() {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.tvIssue,
      },
    });
    return await this.modal.present();
  }

  async openDeviceListDialog() {
    this.modal = await this.modalCtrl.create({
      component: DeviceListDialog,
    });
    return await this.modal.present();
  }

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, public router: Router, private modalCtrl: ModalController) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  async openPasswordResetDialog() {
    const modal = await this.modalCtrl.create({
      component: ResetFactoryDefaultDialog,
    });
    return await modal.present();
  }

  async AppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
    });
    return await modal.present();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);

    //Router Reboot Required
    if (this.codeType === ERoutingIds.routerRebootRequired) {
      this.messageSection = CustomerJourneyConstants.routerRebootRequiredMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerRebootRequiredButtons));
    }
    //Router Reset Required
    else if (this.codeType === ERoutingIds.routerResetRequired) {
      this.messageSection = CustomerJourneyConstants.routerResetRequiredMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerResetRequiredButtons));
    }
    //Issue Not Fixed
    else if (this.codeType === ERoutingIds.issueNotFixed) {
      this.messageSection = CustomerJourneyConstants.issueNotFixedMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.issuesNotFixedButtons));
    }

    //Router Reset Required
    else if (this.codeType === ERoutingIds.noIssueTv) {
      this.messageSection = CustomerJourneyConstants.routerResetRequiredMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.noIssueTvButton));
    }

    //Internet password reset required
    else if (this.codeType === ERoutingIds.internetPasswordReset) {
      this.messageSection = CustomerJourneyConstants.internetPasswordResetRequiredMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.internetPasswordResetButtons));
    }
    //3rd party router requires configuration
    else if (this.codeType === ERoutingIds.RouterReset3rdParty) {
      this.messageSection = CustomerJourneyConstants.routerConfig3rdPartyMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.RouterReset3rdParty));
    }
    //Package Upgrade Recommended
    else if (this.codeType === ERoutingIds.packageUpgradeRecommended) {
      this.messageSection = CustomerJourneyConstants.packageUpdradeRecomendedMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageUpgradeRecommendedButtons));
    }
    //router Upgrade Recommended
    else if (this.codeType === ERoutingIds.routerUpgradeRecommended) {
      this.messageSection = CustomerJourneyConstants.routerUpdradeRecomendedMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerUpgradeRecommendedButtons));
    }
    //Wi-Fi Alarm
    else if (this.codeType === ERoutingIds.WiFiAlarm) {
      this.messageSection = CustomerJourneyConstants.wifiAlarmMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.wiFiAlarmButtons));
    }
    //Outage
    else if (this.codeType === ERoutingIds.outage) {
      this.messageSection = CustomerJourneyConstants.outageIssueMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.outageButtons));
    }
    //Router & package upgrade recommended
    else if (this.codeType === ERoutingIds.routerPackageUpgradeRecommended) {
      this.messageSection = CustomerJourneyConstants.packageAndRouterUpdradeRecomendedMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerPackageUpgradeRecommendedButtons));
    }
    //Router & package upgrade recommended
    else if (this.codeType === ERoutingIds.routerPackageUpgradeRecommended) {
      this.messageSection = CustomerJourneyConstants.packageAndRouterUpdradeRecomendedMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerPackageUpgradeRecommendedButtons));
    }
    // Router no-issue
    else if (this.codeType === ERoutingIds.noIssue) {
      this.messageSection = CustomerJourneyConstants.noIssueMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.btnConfig = CustomerJourneyConstants.noIssue;
      this.btnConfig.forEach((elem) => {
        if (elem.title === 'BUTTONS.ISSUE_FIXED') {
          elem.linkTo = 'service-detail';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.btnConfig));
    }
    ///3rd party router
    else if (this.codeType === ERoutingIds.thirdPartyRouter) {
      this.messageSection = CustomerJourneyConstants.router3rdPartyMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.thirdPartyMainButtons));
    }
    //Router managed, but not reachable
    else if (this.codeType === ERoutingIds.routerNotReachable) {
      this.messageSection = CustomerJourneyConstants.routerNotReachableMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerNotReachableButtons));
    }

    //TV set top box not reachable
    else if (this.codeType === ERoutingIds.tvBoxNotReachable) {
      this.messageSection = CustomerJourneyConstants.tvBoxNotReachableMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.TV_BOX_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxNotReachableButtons));
    }
    //TV set top box not reachable - AGAIN
    else if (this.codeType === ERoutingIds.tvBoxNotReachableTryAgain) {
      this.messageSection = CustomerJourneyConstants.tvBoxNotReachableAgainMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.TV_BOX_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxNotReachableTryAgainButtons));
    }
    //TV set top box restart required
    else if (this.codeType === ERoutingIds.tvBoxRestartRequired) {
      this.messageSection = CustomerJourneyConstants.tvBoxRestartMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.TV_BOX_TITLE', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartRequiredButtons));
    }

    //Unable to watch channel
    else if (this.codeType === ERoutingIds.enableWatchChannel) {
      this.messageSection = CustomerJourneyConstants.unableWatchChannelsMessageSection;
      this.sharedService.setHeaderConfig('LANDING_PAGE.UNALBE_TO_WATCH_CHANNEL', false);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.unableToWatchButtons));
    }
  }
}
