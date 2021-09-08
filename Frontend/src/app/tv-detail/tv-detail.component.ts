import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { EIssueFlow, IssueListDialog } from '../shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss'],
})
export class TvDetailComponent implements OnInit {
  modal;
  constructor(public router: Router, private sharedService: SharedService, private modalCtrl: ModalController) {}
  ngOnInit() {
    this.sharedService.setHeaderConfig('TV details', false);
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvDetailsButton));
  }
  cardList = [
    {
      header: 'STB SR#039838920',
      subHeader: 'MAC: ABC12345',
      list: ['Package 1', 'Package 2', 'Package 3'],
    },
    {
      header: 'STB SR#039838920',
      subHeader: 'MAC: ABC12345',
      list: ['Package 1', 'Package 2', 'Package 3'],
    },
    {
      header: 'STB SR#039838920',
      subHeader: 'MAC: ABC12345',
      list: ['Package 1', 'Package 2', 'Package 3'],
    },
  ];
  eLifegames = [
    { title: 'Call of Duty: Modern Warfare', imgSrc: 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg' },
    { title: 'Dangerous driving 2018', imgSrc: 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg' },
  ];
  async openInternetIssueDialog() {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.tvIssue,
      },
    });
    return await this.modal.present();
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
}
