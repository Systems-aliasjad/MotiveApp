import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator, ERoutingIds } from '../../constants/constants';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forgot-ccb-pin',
  templateUrl: './forgot-ccb-pin.component.html',
  styleUrls: ['./forgot-ccb-pin.component.scss'],
})
export class ForgotCcbPinComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;
  codeType;
  case: number = 1;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  termsCheck: boolean = false;
  subscription: Subscription;
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService, private actRoute: ActivatedRoute, private location: Location) {
    this.subscription = this.sharedService.getTermsConditions().subscribe((config) => {
      this.termsCheck = config;
    });

    this.actRoute.data.subscribe((data) => {
      this.codeType = data?.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setHeaderConfig('HEADER.RESET_CCB_PIN', true);
    this.createForm();
    // 3.6.16
    if (this.codeType === ERoutingIds.noIssuePhoneResetCCBPin) {
      this.case = 1;
      // 4.5.1
    } else if (this.codeType === ERoutingIds.resetTelephoneCCBPIN) {
      this.case = 2;
    }
  }

  createForm() {
    this.formGroup = this.formBuilder.group(
      {
        NewPassword: ['', [Validators.required]],
        ConfirmPassword: ['', [Validators.required]],
      },
      {
        //validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
      }
    );
  }

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.valid);
    this.router.navigate(['/issues/phone/forgot-ccb-pin-message']);
  }

  onBackClick() {
    this.location.back();
  }
}
