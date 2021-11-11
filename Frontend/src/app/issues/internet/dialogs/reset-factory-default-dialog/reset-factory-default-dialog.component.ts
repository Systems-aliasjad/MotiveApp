import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-reset-factory-default-dialog',
  templateUrl: './reset-factory-default-dialog.component.html',
  styleUrls: ['./reset-factory-default-dialog.component.scss'],
})
export class ResetFactoryDefaultDialog implements OnInit {
  terms: boolean = false;
  @Input()
  quickLinkNextSignal;
  constructor(
    private helperService: HelperService,
    private backendService: BackendService,
    private modalCtrl: ModalController,
    private router: Router,
    private sharedService: SharedService
  ) {}

  CloseModal() {
    this.dismiss();
    if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((res) => {
        this.sharedService.setLoader(false);
        if (res?.result?.screenCode === flowCodes.QAHSIPnPFR) {
          this.router.navigate(['/thanks']);
        } else if (res?.result?.screenCode === flowCodes.QAHSIPnPFR5) {
          this.router.navigate(['/issues/internet/router-reset-successful']);
        } else if (res?.result?.screenCode === flowCodes.QAHSIPnPFR1) {
          this.router.navigate(['/issues/internet/server-timeout']);
        } else {
          this.router.navigate(['/unknown-issue']);
        }
      });
    } else {
      this.sharedService.setLoader(true);
      this.backendService.nextSignal('MandatoryOnly').subscribe((data: any) => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        this.sharedService.setLoader(false);
        this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    }
  }

  ngOnInit() {
    this.sharedService.getTermsConditions().subscribe((term) => {
      this.terms = term;
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
