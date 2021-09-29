import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SharedService } from '../../../../shared/shared.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restart-tvbox-dialog',
  templateUrl: './restart-tvbox-dialog.component.html',
  styleUrls: ['./restart-tvbox-dialog.component.scss'],
})
export class RestartTvboxDialog implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private location: Location, private actRoute: ActivatedRoute, private modalCtrl: ModalController, public router: Router, private sharedService: SharedService) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initialization() {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  gotoMainForm() {
    this.dismiss();
    this.router.navigate(['/thanks']);
  }
}
