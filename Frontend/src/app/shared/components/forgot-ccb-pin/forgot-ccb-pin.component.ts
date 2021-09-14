import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator } from '../../constants/constants';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-forgot-ccb-pin',
  templateUrl: './forgot-ccb-pin.component.html',
  styleUrls: ['./forgot-ccb-pin.component.scss'],
})
export class ForgotCcbPinComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  termsCheck: boolean = false;
  subscription: Subscription;
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService) {
    this.sharedService.setHeaderConfig('HEADER.RESET_CCB_PIN', true);

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
    this.router.navigate(['no-issue-phone-phone-reset-ccb-pin-successfully']);
  }
}
