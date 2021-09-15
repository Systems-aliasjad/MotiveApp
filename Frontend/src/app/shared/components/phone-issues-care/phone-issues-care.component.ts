import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { InternetIssuesDialogSecondComponent } from '../../dialogs/internet-issues-dialog-second/internet-issues-dialog-second.component';
import { InternetIssuesDialog } from '../../dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { RestartRouterDialog } from '../../dialogs/restart-router-dialog/restart-router-dialog.component';
import { RestartTvboxDialog } from '../../dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-phone-issues-care',
  templateUrl: './phone-issues-care.component.html',
  styleUrls: ['./phone-issues-care.component.scss'],
})
export class PhoneIssuesCareComponent implements OnInit {
  selectedLang: string;
  codeType;
  pageHeading;
  PageContent;
  subscription: Subscription;
  section1;
  section2;

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  constructor(private sharedService: SharedService, private modalCtrl: ModalController, public router: Router, private actRoute: ActivatedRoute) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    if (this.codeType === ERoutingIds.noIssuePhoneUnablePhoneCalls) {
      this.sharedService.setHeaderConfig('PHONE_ISSUES_CARE.HEADER', true);
      this.section1 = CustomerJourneyConstants.noIssuesPhoneCareSection1;
      this.section2 = CustomerJourneyConstants.noIssuesPhoneCareSection2;

      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.phoneIssuesCareButtons));
    }

    if (this.codeType === ERoutingIds.noIssuePhoneNoDialTone) {
      this.sharedService.setHeaderConfig('PHONE_ISSUES_CARE.NO_DIAL_TONE', true);
      this.section1 = CustomerJourneyConstants.noIssuesPhoneCareSection1;
      this.section2 = CustomerJourneyConstants.noIssuesPhoneCareSection2;

      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.phoneIssuesCareButtons));
    }
    //#endregion Module 3
  }

  async continueTroubleShoot() {
    const modal = await this.modalCtrl.create({
      component: RestartRouterDialog,
    });
    return await modal.present();
  }

  async openRestartTvBoxDialog() {
    const modal = await this.modalCtrl.create({
      component: RestartTvboxDialog,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async AppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
    });
    return await modal.present();
  }

  async RouterNotReachableAppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
      },
    });
    return await modal.present();
  }

  async RouterNotReachableOwnRouterAppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialogSecondComponent,
      componentProps: {
        id: ERoutingIds.routerNotReachableOwnRouter,
      },
    });
    return await modal.present();
  }
}
