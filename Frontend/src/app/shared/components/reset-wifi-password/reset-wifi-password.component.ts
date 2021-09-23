import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator, eyeHide, eyeShow } from '../../constants/constants';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-reset-wifi-password',
  templateUrl: './reset-wifi-password.component.html',
  styleUrls: ['./reset-wifi-password.component.scss'],
})
export class ResetWifiPasswordComponent implements OnInit, OnDestroy {
  public segment: string = '1';
  public routerSettingsForm: FormGroup;
  error = errorMessages;
  @ViewChild('staticTabs', { static: false }) staticTabs: ResetWifiPasswordComponent;
  termsCheck: boolean = false;
  modal: any;
  subscription: Subscription;
  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;
  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  constructor(private fb: FormBuilder, public router: Router, private sharedService: SharedService, private actRoute: ActivatedRoute, private modalCtrl: ModalController) {
    this.subscription = actRoute.params.subscribe((val) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setHeaderConfig('HEADER.RESET_WIFI_PASSWORD', true);
    this.sharedService.getTermsConditions().subscribe((config) => {
      this.termsCheck = config;
    });
    this.createForm();
  }

  createForm() {
    this.routerSettingsForm = this.fb.group({
      terms: [true, Validators.required],
      tab1: this.fb.group(
        {
          WifiName: ['', Validators.required],
          NewPassword: ['', Validators.required],
          ConfirmPassword: ['', Validators.required],
          MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
        },
        {
          validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
        }
      ),
      tab2: this.fb.group(
        {
          WifiName: ['', Validators.required],
          NewPassword: ['', Validators.required],
          ConfirmPassword: ['', Validators.required],
          MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
        },
        {
          validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
        }
      ),
    });
  }

  get f() {
    return this.routerSettingsForm.controls;
  }

  SubmitForm() {
    //console.log(this.routerSettingsForm.valid);
    this.router.navigate(['reset-wifi-password-form_successfully']);
  }

  async PopupTermsConditions() {
    this.modal = await this.modalCtrl.create({
      component: TermsConditionsComponent,
    });
    return await this.modal.present();
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
