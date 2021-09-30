import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApplicableCodes, ERoutingIds } from 'src/app/shared/constants/constants';
import { InternetIssuesDialog } from 'src/app/issues/internet/dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { IMotiveButton } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-3rd-party-router',
  template: `<app-diagnose-issue
    [section1Data]="section1Data"
    [section1Template]="section1Template"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,
})
export class RouterNotReachableComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  section1Template;
  section1Data;
  button1: IMotiveButton = {
    title: 'BUTTONS.YES_I_AM',
    type: 'primary',
    explanatoryNote: 'MESSAGES.ARE_YOU_USING_THE_SAME_ROUTER',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.NO_I_M_USING_MY_OWN_ROUTER',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController, private activatedRoute: ActivatedRoute) {}

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
    this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerNotReachableMessageSection;
    this.section1Template = ApplicableCodes.routerNotReachableTemplate;
    this.section1Data = {
      routerName: 'Unnamed router',
      routerModel: 'xxxx xxxx  xxxx xxx',
    };
  }

  async button1Listener() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
      },
    });
    return await modal.present();
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/router-not-reachable-own-router']);
  }
}
