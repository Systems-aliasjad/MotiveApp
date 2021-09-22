import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator } from '../../constants/constants';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reset-router-password',
  templateUrl: './reset-router-password.component.html',
  styleUrls: ['./reset-router-password.component.scss'],
})
export class ResetRouterPasswordComponent implements OnInit {
  public segment: string = '1';
  public routerSettingsForm: FormGroup;
  error = errorMessages;
  @ViewChild('staticTabs', { static: false }) staticTabs: ResetRouterPasswordComponent;

  termsCheck: boolean = false;
  modal: any;
  subscription: Subscription;
  id: number;
  btnText: string;
  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private sharedService: SharedService,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private location: Location
  ) {
    this.subscription = actRoute.data.subscribe((data) => {
      this.id = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setHeaderConfig('HEADER.RESET_ROUTER_WIFI_PASSWORD', true);
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
          MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
          NewPassword: ['', Validators.required],
          ConfirmPassword: ['', Validators.required],
        },
        {
          validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
        }
      ),
      tab2: this.fb.group(
        {
          MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
          NewPassword: ['', Validators.required],
          ConfirmPassword: ['', Validators.required],
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
    this.router.navigate(['reset-router-password-success']);
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

  onBackClick() {
    this.location.back();
  }
}
