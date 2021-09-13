import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { EIssueFlow, IssueListDialog } from '../../dialogs/issue-list-dialog/issue-list-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  buttonsConfig: IButton[] = [];
  modal: any;
  subscription: Subscription;
  cardList: any[] = [
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED COMPUTER',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED SMART WATCH',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED TABLET',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
  ];
  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController, private actRoute: ActivatedRoute) {
    this.subscription = actRoute.params.subscribe((val) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setHeaderConfig('HEADER.SERVICE_DEATAIL', false);
    this.buttonsConfig = CustomerJourneyConstants.serviceDetailsButtonConfig;
    this.buttonsConfig.forEach((elem) => {
      if (elem.title === 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING') {
        elem.linkTo = '/';
        elem.customListner = 'openInternetIssueDialog';
      }
      if (elem.title === 'BUTTONS.ISSUE_FIXED') {
        elem.linkTo = '/thanks';
        elem.customListner = '';
      }
    });
    this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonsConfig));
  }

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
        flow: EIssueFlow.internetIssue,
      },
    });
    return await this.modal.present();
  }
}
