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
  constructor(private modalCtrl: ModalController, private router: Router, private sharedService: SharedService) {}

  CloseMOdal() {
    this.dismiss();
    this.router.navigate(['/reset-wifi-password-success']);
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
