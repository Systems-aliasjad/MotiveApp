import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-device-list-dialog',
  templateUrl: './device-list-dialog.component.html',
  styleUrls: ['./device-list-dialog.component.scss'],
})
export class DeviceListDialog implements OnInit {
  @Input()
  showRouterReboot: boolean;
  devicesList: any[] = [
    { device: 'Reboot all devices', API_PARAM: 'ALL' },
    {
      device: 'Reboot Fiber Box',
      API_PARAM: 'ONT',
    },
  ];

  StbList;
  AllSTB: any = [];
  constructor(private modalCtrl: ModalController, private backendService: BackendService, private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    if (this.showRouterReboot) {
      this.devicesList.push({
        device: 'Reboot internet device',
        API_PARAM: 'ROUTER',
      });
    }
    const apiResponse = this.sharedService.getApiResponseData();

    this.StbList = apiResponse.stbDetails;
    if (this.StbList) {
      this.StbList.forEach((element) => {
        var index = {
          device: 'Reboot STB: ' + element?.stbSerialNumber,
          API_PARAM: 'STB',
          STB_ID: element?.stbSerialNumber,
        };
        this.AllSTB.push(element?.stbSerialNumber);
        this.devicesList.push(index);
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ondeviceClick(forDevice) {
    this.dismiss();
    var apiCall;
    // pass type in case of all or stb

    // routerRebootSuccess: 'CI12',
    // routerRebootFaliure: 'CI121',
    // 'CI122' //ont reboot failer
    // 'CI123' //Stb reboot failer

    // if(ont success)App.MotiveH&S.3.5.5
    // if(satb succes)App.MotiveH&S.2.5.5

    if (forDevice.API_PARAM === 'ALL') {
      apiCall = {
        deviceType: forDevice.API_PARAM, // ALL
        stbList: this.AllSTB,
      };
    } else if (forDevice.API_PARAM === 'STB') {
      apiCall = {
        deviceType: forDevice.API_PARAM, //  STB
        stbList: [forDevice.STB_ID],
      };
    } else {
      apiCall = {
        deviceType: forDevice.API_PARAM, // ONT | ROUTER
        //stbList: this.AllSTB,
      };
    }
    this.sharedService.setLoader(true);
    this.backendService.rebootDeviceSTB(apiCall).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.genericError) {
        this.router.navigate(['/unknown-error']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootSuccess && forDevice.API_PARAM === 'ONT') {
        this.router.navigate(['/issues/phone/ont-reboot-message']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootSuccess && forDevice.API_PARAM === 'STB') {
        this.router.navigate(['/issues/tv/tvBox-restart-required-successfully']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootFaliure) {
        this.router.navigate(['/issues/internet/router-not-restarted']);
      } else if (data?.result?.screenCode === flowCodes.CI122) {
        ////ONT Reboot Failer
        this.router.navigate(['/issues/phone/ont-not-restart-instructions']);
      } else if (data?.result?.screenCode === flowCodes.CI123) {
        //Stb reboot failer
        this.router.navigate(['/issues/tv/box-not-restarted-instructions']);
      }
    });
  }
}
