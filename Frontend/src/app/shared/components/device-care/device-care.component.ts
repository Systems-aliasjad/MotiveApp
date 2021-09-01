import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestartRouterDialog } from '../../dialogs/restart-router-dialog/restart-router-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-care',
  templateUrl: './device-care.component.html',
  styleUrls: ['./device-care.component.scss'],
})
export class DeviceCareComponent implements OnInit {
  selectedLang: string;

  constructor(private sharedService: SharedService, private modalCtrl: ModalController) {
    this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
  }

  ngOnInit() {}

  async continueTroubleShoot() {
    const modal = await this.modalCtrl.create({
      component: RestartRouterDialog,
    });
    return await modal.present();
  }
}
