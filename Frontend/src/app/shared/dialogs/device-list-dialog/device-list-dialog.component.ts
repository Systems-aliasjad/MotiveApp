import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from '../../constants/constants';
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
      device: 'Reboot Fiber Box',
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
    this.backendService.rebootMyDevice(forDevice).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.genericError) {
        this.router.navigate(['/unknown-error']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootSuccess) {
        this.router.navigate(['/issues/internet/router-reboot-successful']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootFaliure) {
        this.router.navigate(['/issues/internet/router-not-restarted']);
      }
    });
  }
}
