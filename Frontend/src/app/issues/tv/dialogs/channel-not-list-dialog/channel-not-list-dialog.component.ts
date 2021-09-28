import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SharedService } from '../../../../shared/shared.service';
@Component({
  selector: 'app-channel-not-list-dialog',
  templateUrl: './channel-not-list-dialog.component.html',
  styleUrls: ['./channel-not-list-dialog.component.scss'],
})
export class ChannelNotListDialogComponent implements OnInit {
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

  ngOnInit() {}

  endTroubleshoot() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/troubleshoot-complete']);
  }

  closePopup() {
    this.modalCtrl.dismiss();
  }
}