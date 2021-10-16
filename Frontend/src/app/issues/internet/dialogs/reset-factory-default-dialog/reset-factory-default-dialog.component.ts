import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-factory-default-dialog',
  templateUrl: './reset-factory-default-dialog.component.html',
  styleUrls: ['./reset-factory-default-dialog.component.scss'],
})
export class ResetFactoryDefaultDialog implements OnInit {
  terms: boolean = true;
  constructor(private modalCtrl: ModalController, private router: Router) {}

  CloseModal() {
    this.dismiss();
    this.router.navigate(['/issues/internet/reset-wifi-password']);
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
