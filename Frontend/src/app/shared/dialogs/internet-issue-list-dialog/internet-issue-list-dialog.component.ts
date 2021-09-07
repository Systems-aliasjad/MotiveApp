import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

export enum EIssueFlow {
  internetIssue,
  tvIssue,
}
@Component({
  selector: 'internet-issue-list-dialog',
  templateUrl: './internet-issue-list-dialog.component.html',
  styleUrls: ['./internet-issue-list-dialog.component.scss'],
})
export class InternetIssueListDialog implements OnInit {
  @Input()
  flow: number;
  internetIssuesList: any[] = [
    {
      issue: 'Unable to connect Wi-Fi',
      route: 'reset-wifi-password-form',
    },
    {
      issue: 'Unable to browse the internet',
      route: 'browser-stapper',
    },
    {
      issue: 'Forgot my Wi-Fi password',
      route: 'reset-wifi-password-form',
    },
    {
      issue: 'Unable to connect to home zone',
      route: 'device-connected-homezone',
    },
    {
      issue: 'Unable to make video calls',
      route: 'unable-video-call',
    },
    {
      issue: 'Unable to connect new device to Wi-Fi',
      route: 'unable-connect-newDevice',
    },
  ];
  tvIssuesList: any[] = [
    {
      issue: 'Forgot my TV admin PIN',
      route: '',
    },
    {
      issue: 'Unable to log in to eLifeON',
      route: '',
    },
    {
      issue: 'Facing problems while playing a game',
      route: '',
    },
    {
      issue: 'Transfer channel to another TV box',
      route: '',
    },
    {
      issue: 'Unable to watch a specific channel',
      route: '',
    },
    {
      issue: 'Unable to watch any channel',
      route: '',
    },
  ];
  issuesList: any[];
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    if (this.flow === EIssueFlow.internetIssue) {
      this.issuesList = this.internetIssuesList;
    } else if (this.flow === EIssueFlow.tvIssue) {
      this.issuesList = this.tvIssuesList;
    }
  }

  onIssueClick(item) {
    if (item.route != '') {
      this.dismiss();
      this.router.navigate([item.route]);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
