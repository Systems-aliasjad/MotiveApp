import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IButton } from '../../constants/types';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';

@Component({
  selector: 'app-reset-factory-default-dialog',
  templateUrl: './reset-factory-default-dialog.component.html',
  styleUrls: ['./reset-factory-default-dialog.component.css'],
})
export class ResetFactoryDefaultDialog implements OnInit {
  buttonsConfig: IButton[] = [];
  terms: boolean = true;
  constructor(private modalCtrl: ModalController, private router: Router) {
    this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.resetFactoryDefault);
  }

  ngOnInit() {}

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

  dismiss() {
    this.modalCtrl.dismiss();
  }
}