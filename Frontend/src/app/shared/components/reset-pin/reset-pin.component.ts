import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ERoutingIds } from '../../constants/constants';
import { ResetTvPinDialog } from '../../dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
import { SharedService } from '../../shared.service';
import { regExps, errorMessages } from '../../validators/validations';
import { IMotiveButton } from '../diagnose-issue/diagnose-issue.component';

export interface IResetPinContent {
  header: string;
  subheader: string;
  inputLablel: string;
}

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
  myBtnSize: string;
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

  @Input()
  resetPinContent: IResetPinContent;
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  @Output() formValue = new EventEmitter();

  ngOnInit() {}

  initialization() {
    // this.sharedService.setDefaultValues();
    // if (this.codeType === ERoutingIds.resetTvAdminPin) {
    //   this.sharedService.setHeaderConfig('DIALOG.RESET_TV_ADMIN_PIN', true);
    // }
    //  else if (this.codeType === ERoutingIds.resetELifeONPin) {
    //   this.sharedService.setHeaderConfig('HEADER.RESET_ELIFEON_PIN', true);
    // }

    this.myBtnSize = this.button3 ? '6' : '12';
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

  button1Listener() {
    this.formValue.emit(this.formGroup.controls['MobileNo'].value);
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
