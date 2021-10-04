import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-reset-factory-default-dialog',
  templateUrl: './reset-factory-default-dialog.component.html',
  styleUrls: ['./reset-factory-default-dialog.component.scss'],
})
export class ResetFactoryDefaultDialog implements OnInit {
  terms: boolean = true;
  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private sharedService: SharedService,
    private helperService: HelperService,
    private backendService: BackendService
  ) {}

  CloseMOdal() {
    this.dismiss();
    this.sharedService.setLoader(true);
    this.backendService.nextSignal({ signal: 'MandatoryOnly' }).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.helperService.flowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
