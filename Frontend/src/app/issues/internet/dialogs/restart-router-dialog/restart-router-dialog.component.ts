import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-restart-router-dialog',
  templateUrl: './restart-router-dialog.component.html',
  styleUrls: ['./restart-router-dialog.component.scss'],
})
export class RestartRouterDialog implements OnInit {
  @Input()
  isManualOpt: boolean = false;

  constructor(private modalCtrl: ModalController, public router: Router, private sharedService: SharedService, private backendService: BackendService) {}

  ngOnInit() {}

  exitTroubleshoot() {
    this.dismiss();
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
