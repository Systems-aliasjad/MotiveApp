import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator } from '../../constants/constants';
@Component({
  selector: 'app-reset-wifi-password',
  templateUrl: './reset-wifi-password.component.html',
  styleUrls: ['./reset-wifi-password.component.scss'],
})
export class ResetWifiPasswordComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;
  @ViewChild('staticTabs', { static: false }) staticTabs: ResetWifiPasswordComponent;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  termsCheck: boolean = false;

  tabCheck = 1;

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService) {
    this.sharedService.setHeaderConfig('HEADER.RESET_WIFI_PASSWORD', true);

    this.sharedService.getTermsConditions().subscribe((config) => {
      this.termsCheck = config;
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        WifiName: [''],
        NewPassword: ['', [Validators.required]],
        ConfirmPassword: ['', [Validators.required]],
        MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
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
    // this.router.navigate(['thanks']);
  }

  PopupTermsConditions() {
    this.router.navigate(['terms']);
  }

  PanelButton(tabId: number) {
    console.log(tabId);
    this.tabCheck = tabId;
  }
}
