import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { InternetIssuesDialog } from 'src/app/shared/dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-3rd-party-router',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class RouterNotReachableComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.USING_THE_SAME_ROUTER',
    type: 'primary',
    explanatoryNote: 'TEXT.USING_THE_SAME_ROUTER',
  };
  button2: IMotiveButton = {
    title: 'LINKS.USING_OWN_ROUTER',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.routerNotReachableMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
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
