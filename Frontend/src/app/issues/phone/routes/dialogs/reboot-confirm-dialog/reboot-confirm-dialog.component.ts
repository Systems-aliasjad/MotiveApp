import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
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
    this.backendService.rebootMyDevice('ONT').subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/issues/phone/no-issue-phone-value-added']);
    });
  }
}
