import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
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
  constructor(private backendService: BackendService, private modalCtrl: ModalController, private router: Router, private sharedService: SharedService) {}

  CloseModal() {
    this.dismiss();
    if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((res) => {
        if (res?.result?.screenCode === 'QA-HSI-PnPFR') {
          // (Success)
        } else if (res?.result?.screenCode === 'QA-HSI-PnPFR5') {
          this.router.navigate(['/issues/internet/router-reset-successful']);
          // (intermediate)
        } else {
          // (Failure)
          this.router.navigate(['/unknown-issue']);
        }
        this.sharedService.setLoader(false);
      });
    } else {
      this.router.navigate(['/issues/internet/reset-wifi-password']);
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
