import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IDeviceCareContent } from 'src/app/shared/components/device-care/device-care.component';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { InternetIssuesDialogSecondComponent } from 'src/app/issues/internet/dialogs/internet-issues-dialog-second/internet-issues-dialog-second.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-install-new-router-care',
  template:
    '<app-device-care [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class RouterNotReachableOwnCareComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
    body2: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(private modalCtrl: ModalController, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
  }

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.header1 = 'SUBHEADER.HOW_TO_RECONFIGURE_YOUR_ROUTER';
    this.careContent.body1 = 'MESSAGES.Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    this.careContent.body2 = 'MESSAGES.Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  async button2Listener() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialogSecondComponent,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
      },
    });
    return await modal.present();
  }
}
