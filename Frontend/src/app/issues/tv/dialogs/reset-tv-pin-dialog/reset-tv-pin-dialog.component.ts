import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-reset-tv-pin-dialog',
  templateUrl: './reset-tv-pin-dialog.component.html',
  styleUrls: ['./reset-tv-pin-dialog.component.scss'],
})
export class ResetTvPinDialog implements OnInit {
  modal;
  constructor(private sharedService: SharedService, private backendService: BackendService, public router: Router, public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async confirm() {
    try {
      await this.modalCtrl.dismiss();
      await this.modalCtrl.dismiss();
    } catch (ex) {}

    this.router.navigate(['/issues/tv/reset-admin-pin-package-transfer']);

    // this.router.navigate(['issues/tv/tv-admin-pin-reset-success']);
  }
}
