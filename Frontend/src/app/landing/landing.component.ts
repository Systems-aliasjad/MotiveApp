import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICard } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';
import { motiveSubscriptions } from '../shared/constants/constants';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { EIssueFlow, IssueListDialog } from '../shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  codeType: string;
  selectedLang: string;
  landingPageCards: ICard[];
  showLoader: boolean = false;
  paramsSubscription: Subscription;
  modal: any;
  user: any;

  constructor(private sharedService: SharedService, public router: Router, private modalCtrl: ModalController, private backendService: BackendService) {}

  ngOnInit(): void {
    this.initialization();
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  initialization() {
    this.updateProfileData();
    this.getProductCode();
    this.sharedService.setDefaultValues();
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.sharedService.setHeaderConfig('HEADER.TECHNICAL_SUPPORT', false, false);
  }

  updateProfileData() {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.user as {
      accountId: string;
      username: string;
    };
  }

  getProductCode() {
    this.backendService.getLandingPageData().subscribe((data: any) => {
      this.codeType = data?.result?.productCode;
      this.landingPageCards = motiveSubscriptions[this.codeType].landingPageCards;
    });
  }

  handleClick = (route) => {
    this.router.navigate([route]);
  };

  onCardClick(card) {
    if (card?.customEvent) {
      this[card.customEvent]();
    } else if (card.linkTo != '' && card.linkTo != '#') {
      this.router.navigate([card.linkTo]);
    }
  }

  async openPasswordIssueDialog() {
    await this.openIssueDialog(EIssueFlow.passwordIssue);
  }

  async openInternetIssueDialog() {
    await this.openIssueDialog(EIssueFlow.internetIssue);
  }

  async openTVIssueDialog() {
    await this.openIssueDialog(EIssueFlow.tvIssue);
  }

  async openIssueDialog(eIFlow: EIssueFlow) {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: eIFlow,
      },
    });
    return await this.modal.present();
  }
}
