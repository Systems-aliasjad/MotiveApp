import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-list-dialog',
  templateUrl: './device-list-dialog.component.html',
  styleUrls: ['./device-list-dialog.component.scss'],
})
export class DeviceListDialog implements OnInit {
  devicesList: any[] = [
    {
      device: 'Reboot all devices',
      API_PARAM: 'ALL',
    },
    {
      device: 'Reboot internet device',
      API_PARAM: 'ROUTER',
    },
    {
      device: 'Reboot ONT',
      API_PARAM: 'ONT',
    },
  ];

  constructor(private modalCtrl: ModalController, private backendService: BackendService, private sharedService: SharedService, private router: Router) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ondeviceClick(forDevice) {
    this.dismiss();
    this.sharedService.setLoader(true);
    this.backendService.rebootMyDevice(forDevice).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['issues/internet/service-detail']);
    });
  }
}
