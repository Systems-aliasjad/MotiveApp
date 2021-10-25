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

  ngOnInit() {}

  endTroubleshoot() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/troubleshoot-complete']);
  }

  getMoreChannels() {
    let url;
    const lang: string = this.sharedService.getDefaultLanguage();
    if (lang === 'ara') {
      url = `https://www.etisalat.ae/b2c/eshop/viewProducts?category=homeAddons&subCategory=cat550030&catName=TV_add-on&listVal=TV_add-on&filtersParam=N%3D1303117285%2B2026559889%26Nr%3Dproduct.language%253Aen-AE&locale=AR`;
    } else {
      url = `https://www.etisalat.ae/b2c/eshop/viewProducts?category=homeAddons&subCategory=cat550030&catName=TV_add-on&listVal=TV_add-on&filtersParam=N%3D1303117285%2B2026559889%26Nr%3Dproduct.language%253Aen-AE`;
    }
    window.open(url, '_blank');
  }

  closePopup() {
    this.modalCtrl.dismiss();
  }
}
