import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { ResetFactoryDefaultDialog } from 'src/app/issues/internet/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
import { ResetWifiDialogComponent } from '../dialogs/reset-wifi-dialog/reset-wifi-dialog.component';

@Component({
  selector: 'app-router-reset-required',
  template: ``,
})
export class ResetWifiPasswrodScreenDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private backendService: BackendService
  ) {}
  async ngAfterViewInit() {
    const modal = await this.modalCtrl.create({
      component: ResetWifiDialogComponent,
      backdropDismiss: false,
    });

    return await modal.present();
  }

  ngOnInit() {}

  ngOnDestroy(): void {}

  updateHeader() {
    // this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  updatePageContent() {}

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  async button1Listener() {}
}
