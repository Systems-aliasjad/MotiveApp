import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CustomerJourneyConstants } from '../../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-reset-factory-default-dialog',
  templateUrl: './reset-factory-default-dialog.component.html',
  styleUrls: ['./reset-factory-default-dialog.component.scss'],
})
export class ResetFactoryDefaultDialog implements OnInit {
  terms: boolean = true;
  constructor(private modalCtrl: ModalController, private router: Router, private sharedService: SharedService) {
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.resetFactoryDefault));
  }

  CloseMOdal() {
    this.dismiss();
    this.router.navigate(['/reset-wifi-password-success']);
  }

  ngOnInit() {}

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

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
