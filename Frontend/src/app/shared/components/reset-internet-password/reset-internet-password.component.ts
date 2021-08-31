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

  termsCheck: any;

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService) {
    this.formGroup = this.formBuilder.group(
      {
        MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
        NewPassword: ['', [Validators.required, Validators.pattern(regExps.password)]],
        ConfirmPassword: ['', [Validators.required, Validators.pattern(regExps.password)]],
      },
      {
        validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
      }
    );

    this.sharedService.getTermsConditions().subscribe((config) => {
      this.termsCheck = config.termsCheck;
    });
  }

  ngOnInit() {}

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.value);
    this.router.navigate(['thanks']);
  }

  PopupTermsConditions() {
    this.router.navigate(['terms']);
  }
}
export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    debugger;
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    // if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
    //   return;
    // }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors({ confirmedValidator: null });
    }
  };
}
