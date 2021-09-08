import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { EIssueFlow, IssueListDialog } from '../../dialogs/issue-list-dialog/issue-list-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {
  buttonsConfig: IButton[] = [];
  modal: any;
  cardList: any[] = [
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED COMPUTER',
      IP: '192.168.1.125',
    },
    // {
    //   heading: 'UNNAMED SMART WATCH',
    //   IP: '192.168.1.125',
    // },
    // {
    //   heading: 'UNNAMED TABLET',
    //   IP: '192.168.1.125',
    // },
    // {
    //   heading: 'UNNAMED PHONE',
    //   IP: '192.168.1.125',
    // },
  ];
  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController, private actRoute: ActivatedRoute) {
    actRoute.params.subscribe((val) => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.sharedService.setHeaderConfig('Service detail', false);
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
