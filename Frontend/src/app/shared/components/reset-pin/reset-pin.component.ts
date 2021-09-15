import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ERoutingIds } from '../../constants/constants';
import { ResetTvPinDialog } from '../../dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
import { SharedService } from '../../shared.service';
import { regExps, errorMessages } from '../../validators/validations';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.scss'],
})
export class ResetPinComponent implements OnInit {
  formGroup: FormGroup;
  error = errorMessages;
  modal: any;
  subscription: Subscription;
  codeType;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private sharedService: SharedService,
    private modalCtrl: ModalController,
    private location: Location,
    private actRoute: ActivatedRoute
  ) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    if (this.codeType === ERoutingIds.resetTvAdminPin) {
      this.sharedService.setHeaderConfig('DIALOG.RESET_TV_ADMIN_PIN', true);
    }
    if (this.codeType === ERoutingIds.resetELifeONPin) {
      this.sharedService.setHeaderConfig('HEADER.RESET_ELIFEON_PIN', true);
    }
    this.formGroup = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  async SubmitForm() {
    if (this.formGroup.valid) {
      if (this.codeType === ERoutingIds.resetTvAdminPin) {
        await this.openResetTvDialog();
      } else if (this.codeType === ERoutingIds.resetELifeONPin) {
        this.router.navigate(['/reset-login-pin-success']);
      }
    }
  }

  async openResetTvDialog() {
    this.modal = await this.modalCtrl.create({
      component: ResetTvPinDialog,
    });
    this.modal.onDidDismiss().then((d) => {});
    return await this.modal.present();
  }

  onBackClick() {
    this.location.back();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
