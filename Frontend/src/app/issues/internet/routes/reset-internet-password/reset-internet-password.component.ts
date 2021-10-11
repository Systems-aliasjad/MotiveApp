import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../../../shared/validators/validations';
import { SharedService } from '../../../../shared/shared.service';
import { ConfirmedValidator, eyeHide, eyeShow } from '../../../../shared/constants/constants';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TermsConditionsComponent } from '../../../../shared/components/terms-conditions/terms-conditions.component';
import { Location } from '@angular/common';
import { IPageHeader } from 'src/app/shared/constants/types';
@Component({
  selector: 'app-reset-internet-password',
  templateUrl: './reset-internet-password.component.html',
  styleUrls: ['./reset-internet-password.component.scss'],
})
export class ResetInternetPasswordComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  error = errorMessages;
  modal: any;
  // passwordType: string = 'password';
  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;

  termsCheck: boolean = false;
  subscription: Subscription;
  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_INTERNET_PASSWORD',
    showBackBtn: true,
  };

  constructor(
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public router: Router,
    private sharedService: SharedService,
    private modalCtrl: ModalController,
    private location: Location
  ) {
    //this.sharedService.setHeaderConfig('HEADER.RESET_INTERNET_PASSWORD', true);

    this.subscription = actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription.add(
      this.sharedService.getTermsConditions().subscribe((config) => {
        this.formGroup.controls['terms'].setValue(config);
      })
    );
  }

  get f() {
    return this.formGroup.controls;
  }

  initialization() {
    this.formGroup = this.formBuilder.group(
      {
        MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
        NewPassword: ['', [Validators.required]],
        ConfirmPassword: ['', [Validators.required]],
        terms: [false, Validators.required],
      },
      {
        validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
      }
    );
  }

  SubmitForm() {
    console.log(this.formGroup.valid);
    this.router.navigate(['/issues/internet/internet-password-reset-success']);
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
