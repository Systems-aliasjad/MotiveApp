import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator } from '../../constants/constants';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reset-internet-password',
  templateUrl: './reset-internet-password.component.html',
  styleUrls: ['./reset-internet-password.component.scss'],
})
export class ResetInternetPasswordComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  error = errorMessages;
  modal: any;
  passwordType: string = 'password';

  termsCheck: boolean = false;
  subscription: Subscription;
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService, private modalCtrl: ModalController, private location: Location) {
    this.sharedService.setHeaderConfig('HEADER.RESET_INTERNET_PASSWORD', true);

    this.subscription = this.sharedService.getTermsConditions().subscribe((config) => {
      this.termsCheck = config;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
        NewPassword: ['', [Validators.required]],
        ConfirmPassword: ['', [Validators.required]],
        terms: [true, Validators.required],
      },
      {
        validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
      }
    );
  }

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.valid);
    this.router.navigate(['internet-password-reset-success']);
    // On Error Navigate to
    // this.router.navigate(['internet-password-reset-error']);
  }

  async PopupTermsConditions() {
    this.modal = await this.modalCtrl.create({
      component: TermsConditionsComponent,
    });
    this.modal.onDidDismiss().then((d) => {
      if (d.data && this.formGroup.valid) {
        this.SubmitForm();
      }
      this.modalCtrl.dismiss();
    });
    return await this.modal.present();
  }

  onBackClick() {
    this.location.back();
  }
}
