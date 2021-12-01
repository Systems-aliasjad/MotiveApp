import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { RestartRouterDialog } from 'src/app/issues/internet/dialogs/restart-router-dialog/restart-router-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-router-restart-care',
  template:
    '<app-device-care [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class RouterRestartCareComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://simulator-devicecare.etisalat.ae/WebApp/Main.aspx?locale=en_US',
    header1: 'SUBHEADER.SPECIFIC_DEVICE_GUIDES',
    body1: 'MESSAGES.PLEASE_SELECT_THE_DEVICE_MAKE_AND_MODEL_AND_FOLLOW_THE_INSTRUCIONS_TO_CONFIGURE_YOUR_ROUTER',
    body2: 'MESSAGES.MAKE_SURE_TO_USE_THE_CORRECT_USER_ID_AND_PASSWORD_WHILE_CONFIGURING_THE_ROUTER',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    // this.subscription = this.activatedRoute.data.subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.DEVICE_CARE',
    showBackBtn: true,
  };

  button1Listener() {
    // this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      //  this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
  }

  async button2Listener() {
    const modal = await this.modalCtrl.create({
      component: RestartRouterDialog,
    });
    return await modal.present();
  }
}
