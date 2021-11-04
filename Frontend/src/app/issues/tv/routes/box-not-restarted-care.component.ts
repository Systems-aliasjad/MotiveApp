import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { RestartTvboxDialog } from 'src/app/issues/tv/dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-box-not-restarted-care',
  template:
    '<app-device-care [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class BoxNotRestartedCareComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
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
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
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
    //this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.DEVICE_CARE',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.header1 = 'SUBHEADER.SPECIFIC_DEVICE_GUIDES';
    // this.careContent.body1 = 'Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    // this.careContent.body2 = 'Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  }

  button1Listener() {
    if (this.sharedService.getQuickLinksData()) {
      this.router.navigate(['/landing']);
    } else {
      //this.router.navigate(['/thanks']);
      this.sharedService.setLoader(true);
      this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: true }).subscribe(() => {
        this.sharedService.setLoader(false);
        this.router.navigate(['/thanks']);
      });
    }
  }

  async button2Listener() {
    const modal = await this.modalCtrl.create({
      component: RestartTvboxDialog,
    });
    return await modal.present();
  }
}
