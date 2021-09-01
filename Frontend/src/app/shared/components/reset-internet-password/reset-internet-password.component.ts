import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-reset-internet-password',
  templateUrl: './reset-internet-password.component.html',
  styleUrls: ['./reset-internet-password.component.scss'],
})
export class ResetInternetPasswordComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  termsCheck: boolean = false;

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService) {
    this.sharedService.setHeaderConfig('HEADER.RESET_INTERNET_PASSWORD', true);

    this.sharedService.getTermsConditions().subscribe((config) => {
      this.termsCheck = config;
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
        NewPassword: ['', [Validators.required]],
        ConfirmPassword: ['', [Validators.required]],
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
    this.router.navigate(['thanks']);
  }

  PopupTermsConditions() {
    this.router.navigate(['terms']);
  }
}
export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors({ confirmedValidator: null });
      matchingControl.updateValueAndValidity();
    }
  };
}
