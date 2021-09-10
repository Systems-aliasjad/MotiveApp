import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-restart-tvbox-dialog',
  templateUrl: './restart-tvbox-dialog.component.html',
  styleUrls: ['./restart-tvbox-dialog.component.scss'],
})
export class RestartTvboxDialog implements OnInit {
  constructor(private modalCtrl: ModalController, public router: Router, private sharedService: SharedService) {}

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  ngOnInit() {
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartDialogButtons));
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  gotoMainForm() {
    this.dismiss();
    this.router.navigate(['']);
  }
}
