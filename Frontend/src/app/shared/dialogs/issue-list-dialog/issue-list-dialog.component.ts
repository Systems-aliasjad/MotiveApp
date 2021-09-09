import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ResetTvPinDialog } from '../reset-tv-pin-dialog/reset-tv-pin-dialog.component';

export enum EIssueFlow {
  internetIssue,
  tvIssue,
}
@Component({
  selector: 'issue-list-dialog',
  templateUrl: './issue-list-dialog.component.html',
  styleUrls: ['./issue-list-dialog.component.scss'],
})
export class IssueListDialog implements OnInit {
  @Input()
  flow: number;
  modal;
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
      customEvent: 'openResetTvDialog',
    },
    {
      issue: 'Unable to log in to eLifeON',
      route: 'reset-login-pin',
    },
    {
      issue: 'Facing problems while playing a game',
      route: 'game-session',
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
      route: 'unable-to-watch-channel',
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

  async openResetTvDialog() {
    this.modal = await this.modalCtrl.create({
      component: ResetTvPinDialog,
    });
    return await this.modal.present();
  }

  onIssueClick(item) {
    if (item.route != '') {
      this.dismiss();
      this.router.navigate([item.route]);
    } else if (item.customEvent) {
      this[item.customEvent]();
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
