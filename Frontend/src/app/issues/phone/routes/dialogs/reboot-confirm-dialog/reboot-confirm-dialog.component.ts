import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-reboot-confirm-dialog',
  templateUrl: './reboot-confirm-dialog.component.html',
  styleUrls: ['./reboot-confirm-dialog.component.scss'],
})
export class RebootConfirmDialogComponent implements OnInit {
  quickLinkNextSignal;
  constructor(private backendService: BackendService, private modalCtrl: ModalController, public router: Router, private sharedService: SharedService) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  callapi() {
    this.dismiss();
    this.sharedService.setLoader(true);
    this.backendService.rebootMyDevice('ONT').subscribe((data) => {
      this.sharedService.setLoader(false);

      if (data?.result?.screenCode === flowCodes.genericError) {
        this.sharedService.LogDataResponse(data);
        this.router.navigate(['/unknown-error']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootSuccess) {
        this.router.navigate(['/issues/phone/ont-reboot-message']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootFaliure) {
        this.router.navigate(['/issues/phone/ont-not-restart-instructions']);
      }

      // CI12:Success
      // CI22  //failure

      // this.router.navigate(['/issues/phone/no-issue-phone-value-added']);
    });
  }
}
