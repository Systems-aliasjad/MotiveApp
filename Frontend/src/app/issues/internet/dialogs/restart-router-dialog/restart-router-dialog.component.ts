import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-restart-router-dialog',
  templateUrl: './restart-router-dialog.component.html',
  styleUrls: ['./restart-router-dialog.component.scss'],
})
export class RestartRouterDialog implements OnInit {
  constructor(private modalCtrl: ModalController, public router: Router, private sharedService: SharedService) {}

  ngOnInit() {}

  exitTroubleshoot() {
    this.dismiss();
    this.router.navigate(['/thanks']);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
