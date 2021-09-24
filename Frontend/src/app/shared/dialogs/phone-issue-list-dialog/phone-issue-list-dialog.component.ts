import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EIssueFlow } from '../issue-list-dialog/issue-list-dialog.component';
@Component({
  selector: 'app-phone-issue-list-dialog',
  templateUrl: './phone-issue-list-dialog.component.html',
  styleUrls: ['./phone-issue-list-dialog.component.scss'],
})
export class PhoneIssueListDialogComponent implements OnInit {
  @Input()
  flow: number;
  modal;
  phoneIssuesList: any[] = [
    {
      issue: 'Unable to make/receive calls',
      route: '/issues/phone/unable-to-call/device-care',
    },
    {
      issue: 'No dial tone',
      route: '/issues/phone/no-dail-tone/device-care',
    },
    {
      issue: 'Problem with Value-Added Service ',
      route: 'issues/phone/no-issue-phone-value-added',
    },
    {
      issue: 'Forgot Code Control Barring (CCB) PIN',
      route: 'no-issue-phone-reset-ccb-pin',
    },
    {
      issue: 'Change call forwarding number',
      route: 'no-issue-phone-phone-Change-call-forward',
    },
  ];

  issuesList: any[];
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    if (this.flow === EIssueFlow.internetIssue) {
      this.issuesList = this.phoneIssuesList;
    }
  }

  async dismiss() {
    return this.modalCtrl.dismiss();
  }

  async onIssueClick(item) {
    if (item.route != '') {
      await this.dismiss();
      this.router.navigate([item.route]);
    } else if (item.customEvent) {
      this[item.customEvent]();
    }
  }
}
