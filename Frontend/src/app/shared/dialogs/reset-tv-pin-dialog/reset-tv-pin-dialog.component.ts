import { Router } from '@angular/router';

import { TermsConditionsComponent } from '../../components/terms-conditions/terms-conditions.component';

import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared.service';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-tv-pin-dialog',
  templateUrl: './reset-tv-pin-dialog.component.html',
  styleUrls: ['./reset-tv-pin-dialog.component.scss'],
})
export class ResetTvPinDialog implements OnInit {
  modal;
  constructor(public router: Router, public sharedService: SharedService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.resetTvPinButton));
  }

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          this.modalCtrl.dismiss();
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  async showTermsConditionsModal() {
    this.modal = await this.modalCtrl.create({
      component: TermsConditionsComponent,
    });
    return await this.modal.present();
  }
}
