import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';

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
          this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, public router: Router) {
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }

  ngOnInit() {
    //Router Reboot Required
    if (this.codeType === ERoutingIds.routerRebootRequired) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.routerRebootRequiredButtons);
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
    //Wi-Fi Alarm
    else if (this.codeType === ERoutingIds.WiFiAlarm) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.wiFiAlarmButtons);
    }
  }
}
