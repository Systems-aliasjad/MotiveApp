import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'game-session-dialog',
  templateUrl: './game-session-dialog.component.html',
  styleUrls: ['./game-session-dialog.component.scss'],
})
export class GameSessionDialog implements OnInit {
  constructor(private modalCtrl: ModalController, public router: Router) {}
  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    this.dismiss();
    this.router.navigate(['/game-session-cancel']);
  }
}
