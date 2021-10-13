import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-device-list-dialog',
  templateUrl: './device-list-dialog.component.html',
  styleUrls: ['./device-list-dialog.component.scss'],
})
export class DeviceListDialog implements OnInit {
  devicesList: any[] = [
    {
      device: 'Reboot all devices',
      route: '/',
    },
    {
      device: 'Reboot internet device',
      route: '/',
    },
  ];

  constructor(private modalCtrl: ModalController, private backendService: BackendService) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ondeviceClick(val) {}
}
