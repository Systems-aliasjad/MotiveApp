import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private actRoute: ActivatedRoute, private modalCtrl: ModalController, public router: Router, private sharedService: SharedService) {
    this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

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

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartDialogButtons));
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  gotoMainForm() {
    this.dismiss();
    this.router.navigate(['']);
  }
}
