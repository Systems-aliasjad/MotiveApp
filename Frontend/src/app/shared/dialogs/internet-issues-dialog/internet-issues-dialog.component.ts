import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-internet-issues-dialog',
  templateUrl: './internet-issues-dialog.component.html',
  styleUrls: ['./internet-issues-dialog.component.css'],
})
export class InternetIssuesDialog implements OnInit {
  instructionList: string[] = ['Router is switched on', "The cable from the router is connected to the 'X' port of the wall mounted fibre works"];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
