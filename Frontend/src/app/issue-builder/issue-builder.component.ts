import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { DeviceListDialog } from '../shared/dialogs/device-list-dialog/device-list-dialog.component';
import { SharedService } from '../shared/shared.service';
import { ResetFactoryDefaultDialog } from '../shared/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
import { InternetIssuesDialog } from '../shared/dialogs/internet-issues-dialog/internet-issues-dialog.component';

@Component({
  selector: 'app-issue-builder',
  templateUrl: './issue-builder.component.html',
  styleUrls: ['./issue-builder.component.scss'],
})
export class IssueBuilderComponent implements OnInit {
  codeType;
  modal: any;
  btnConfig: IButton[] = [];

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

  async openDeviceListDialog() {
    this.modal = await this.modalCtrl.create({
      component: DeviceListDialog,
    });
    return await this.modal.present();
  }

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, public router: Router, private modalCtrl: ModalController) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.ngOnInit();
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

  ngOnInit() {
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);

    //Router Reboot Required
    if (this.codeType === ERoutingIds.routerRebootRequired) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerRebootRequiredButtons));
    }
    //Router Reset Required
    else if (this.codeType === ERoutingIds.routerResetRequired) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerResetRequiredButtons));
    }
    //Issue Not Fixed
    else if (this.codeType === ERoutingIds.issueNotFixed) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.issuesNotFixedButtons));
    }

    //Router Reset Required
    else if (this.codeType === ERoutingIds.noIssueTv) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.noIssueTvButton));
    }

    //Internet Password Reset
    else if (this.codeType === ERoutingIds.internetPasswordReset) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.internetPasswordResetButtons));
    }
    //3rd party router requires configuration
    else if (this.codeType === ERoutingIds.RouterReset3rdParty) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.RouterReset3rdParty));
    }
    //Package Upgrade Recommended
    else if (this.codeType === ERoutingIds.packageUpgradeRecommended) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageUpgradeRecommendedButtons));
    }
    ///router Upgrade Recommended
    else if (this.codeType === ERoutingIds.routerUpgradeRecommended) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerUpgradeRecommendedButtons));
    }
    //Wi-Fi Alarm
    else if (this.codeType === ERoutingIds.WiFiAlarm) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.wiFiAlarmButtons));
    }
    //Outage
    else if (this.codeType === ERoutingIds.outage) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.outageButtons));
    }
    ///router Upgrade Recommended
    else if (this.codeType === ERoutingIds.routerPackageUpgradeRecommended) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerPackageUpgradeRecommendedButtons));
    }
    // Router no-issue
    else if (this.codeType === ERoutingIds.noIssue) {
      this.btnConfig = CustomerJourneyConstants.noIssue;
      this.btnConfig.forEach((elem) => {
        if (elem.title === 'BUTTONS.ISSUE_FIXED') {
          elem.linkTo = 'service-detail';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.btnConfig));
    }
    ///third party router
    else if (this.codeType === ERoutingIds.thirdPartyRouter) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.thirdPartyMainButtons));
    }

    ///Reset Wifi Password First Success
    else if (this.codeType === ERoutingIds.resetWifiPasswordSuccess) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.thirdPartyMainButtons));
    }

    //Router Reset Required
    else if (this.codeType === ERoutingIds.routerNotReachable) {
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerNotReachableButtons));
    }
  }
}
