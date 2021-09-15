import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { InternetIssuesDialogSecondComponent } from '../../dialogs/internet-issues-dialog-second/internet-issues-dialog-second.component';
import { InternetIssuesDialog } from '../../dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { RestartRouterDialog } from '../../dialogs/restart-router-dialog/restart-router-dialog.component';
import { RestartTvboxDialog } from '../../dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-phone-issues-problem-value-added',
  templateUrl: './phone-issues-problem-value-added.component.html',
  styleUrls: ['./phone-issues-problem-value-added.component.scss'],
})
export class PhoneIssuesProblemValueAddedComponent implements OnInit, OnDestroy {
  codeType;
  subscription: Subscription;
  heading;
  cardList;
  PageTitle: string;
  PageContent: string;
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

  constructor(private sharedService: SharedService, private modalCtrl: ModalController, public router: Router, private actRoute: ActivatedRoute) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    if (this.codeType === ERoutingIds.noIssuePhoneProblemValueAdded) {
      this.heading = 'PHONE_ISSUES_PROBLEM_VALUE_ADDED.HEADER';
      this.sharedService.setHeaderConfig('PHONE_ISSUES_PROBLEM_VALUE_ADDED.HEADER', true);

      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.phoneIssuesProblemValueAddedButtons));
    }

    this.cardList = [
      {
        header: 'Landline status',
        subHeader: 'working',
        list: [],
      },
      {
        header: 'Value added services',
        subHeader: '7 subsribed',
        list: [
          {
            title: 'Clip',
            description: 'Working',
            title2: '',
            description2: '',
          },
          {
            title: 'Call forwarding',
            description: 'Active  & Enabled',
            title2: 'Call Forwarded to : *****1234',
            description2: 'Change',
            link: true,
          },
          {
            title: 'Call waiting',
            description: 'Issue fixed',
            title2: '',
            description2: '',
          },
          {
            title: 'CBB',
            description: 'Active  & Enabled',
            title2: '',
            description2: 'Reset pin',
            link: true,
          },
          {
            title: 'Name',
            description: 'Status',
            title2: '',
            description2: '',
          },
          {
            title: 'Name',
            description: 'Status',
            title2: '',
            description2: '',
          },
          {
            title: 'Name',
            description: 'Status',
            title2: '',
            description2: '',
          },
        ],
      },
    ];
    //#endregion Module 3
  }

  goToTransferPackage(item) {
    if (this.codeType === ERoutingIds.packageavailable) {
      this.router.navigate(['/package-transfer']);
    } else if (this.codeType === ERoutingIds.enableWatchSpecificChannelpackageavailable) {
      this.router.navigate(['/unable-to-watch-package-transfer']);
    }
  }
}
