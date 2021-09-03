import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';
import { ResetFactoryDefaultDialog } from '../shared/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';

@Component({
  selector: 'app-issue-builder',
  templateUrl: './issue-builder.component.html',
  styleUrls: ['./issue-builder.component.scss'],
})
export class IssueBuilderComponent implements OnInit {
  codeType;
  buttonsConfig: IButton[] = [];

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

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, public router: Router, private modalCtrl: ModalController) {
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }
  async openPasswordResetDialog() {
    const modal = await this.modalCtrl.create({
      component: ResetFactoryDefaultDialog,
    });
    return await modal.present();
  }

  ngOnInit() {
    //Router Reboot Required
    if (this.codeType === ERoutingIds.routerRebootRequired) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.routerRebootRequiredButtons);
    }
    //Router Reset Required
    else if (this.codeType === ERoutingIds.routerResetRequired) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.routerResetRequiredButtons);
    }
    //Issue Not Fixed
    else if (this.codeType === ERoutingIds.issueNotFixed) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.issuesNotFixedButtons);
    }
    //Internet Password Reset
    else if (this.codeType === ERoutingIds.internetPasswordReset) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.internetPasswordResetButtons);
    }
    //3rd party router requires configuration
    else if (this.codeType === ERoutingIds.RouterReset3rdParty) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.RouterReset3rdParty);
    }
    //Package Upgrade Recommended
    else if (this.codeType === ERoutingIds.packageUpgradeRecommended) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.packageUpgradeRecommendedButtons);
    }
    ///router Upgrade Recommended
    else if (this.codeType === ERoutingIds.routerUpgradeRecommended) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.routerUpgradeRecommendedButtons);
    }
    //Wi-Fi Alarm
    else if (this.codeType === ERoutingIds.WiFiAlarm) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.wiFiAlarmButtons);
    }
    //Outage
    else if (this.codeType === ERoutingIds.outage) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.outageButtons);
    }
    ///router Upgrade Recommended
    else if (this.codeType === ERoutingIds.routerPackageUpgradeRecommended) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.routerPackageUpgradeRecommendedButtons);
    }
  }
}
