import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { PhoneIssueListDialogComponent } from 'src/app/shared/dialogs/phone-issue-list-dialog/phone-issue-list-dialog.component';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-phone-no-issues',
  template: `<app-diagnose-issue
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,
})
export class NoIssuesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.REBOOT_MY_DEVICES',
    type: 'secondary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  modal: any;
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
    this.sharedService.setHeaderConfig('LANDING_PAGE.PHONE_ISSUES_TITLE', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.phoneIssuesMainMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
  button2Listener() {}

  async button3Listener() {
    this.modal = await this.modalCtrl.create({
      component: PhoneIssueListDialogComponent,
      componentProps: {
        flow: ERoutingIds.noIssuePhone,
      },
    });
    return await this.modal.present();
  }
}
