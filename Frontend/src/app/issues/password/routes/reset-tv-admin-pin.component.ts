import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { IResetPinContent } from 'src/app/shared/components/reset-pin/reset-pin.component';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ResetTvPinDialog } from 'src/app/issues/tv/dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
@Component({
  selector: 'app-reset-tv-admin-pin',
  template:
    '<app-reset-pin [resetPinContent]="resetContent" (formValue)="getFormValue($event)" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-reset-pin>',
})
export class ResetTvAdminPinComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  formValue;
  modal: HTMLIonModalElement;
  resetContent: IResetPinContent = {
    header: '',
    subheader: '',
    inputLablel: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BACK',
    type: 'link',
  };

  constructor(
    private modalCtrl: ModalController,
    private location: Location,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    this.sharedService.setHeaderConfig('MESSAGES.RESET_TV_ADMIN_PIN', true);
  }

  updatePageContent() {
    this.resetContent.header = 'HEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.subheader = 'SUBHEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.inputLablel = 'MESSAGES.ENTER_YOUR_MOBILE_NUMBER_TO_RECIVE_THE_NEW_PIN_VIA_SMS';
  }

  getFormValue(evt) {
    this.formValue = evt;
  }

  async button1Listener() {
    console.log(this.formValue);
    await this.openResetTvDialog();
  }

  async openResetTvDialog() {
    this.modal = await this.modalCtrl.create({
      component: ResetTvPinDialog,
    });
    this.modal.onDidDismiss().then((d) => {
      this.sharedService.setHeaderConfig('MESSAGES.RESET_TV_ADMIN_PIN', true);
    });
    return await this.modal.present();
  }

  button2Listener() {
    this.location.back();
  }
}
