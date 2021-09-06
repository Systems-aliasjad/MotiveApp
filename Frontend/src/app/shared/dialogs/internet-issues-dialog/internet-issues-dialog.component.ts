import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-internet-issues-dialog',
  templateUrl: './internet-issues-dialog.component.html',
  styleUrls: ['./internet-issues-dialog.component.css'],
})
export class InternetIssuesDialog implements OnInit {
  instructionList: string[] = ['Router is switched on', "The cable from the router is connected to the 'X' port of the wall mounted fibre works"];
  instructionListDialog2: string[] = [
    'We are still unable to reach your router.',
    'It looks like any one of these could be the issue:',
    '1. The router is not switched on',
    '2. The cable isnt connected properly ',
    '3. The router is faulty',
    'Tap Try again later if you want to check the problem later.',
    'Tap Book an appointment if you want to book a technician visit.',
  ];

  showDialog1 = true;

  constructor(private modalCtrl: ModalController, public router: Router) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  SubmitForm() {
    this.showDialog1 = false;
  }

  GoToMainFomr() {
    this.modalCtrl.dismiss();

    this.router.navigate(['/bookComplaint']);
  }
}
