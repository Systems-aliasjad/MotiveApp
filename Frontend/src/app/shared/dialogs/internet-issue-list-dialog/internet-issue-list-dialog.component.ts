import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'internet-issue-list-dialog',
  templateUrl: './internet-issue-list-dialog.component.html',
  styleUrls: ['./internet-issue-list-dialog.component.css'],
})
export class InternetIssueListDialog implements OnInit {
  issuesList: any[] = [
    {
      issue: 'Unable to connect Wi-Fi',
      route: '',
    },
    {
      issue: 'Unable to browse the internet',
      route: 'browser-stapper',
    },
    {
      issue: 'Forgot my Wi-Fi password',
      route: '',
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
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}

  onIssueClick(item) {
    if (item.route != '') {
      this.router.navigate([item.route]);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
