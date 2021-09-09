import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'game-session-dialog',
  templateUrl: './game-session-dialog.component.html',
  styleUrls: ['./game-session-dialog.component.scss'],
})
export class GameSessionDialog implements OnInit {
  constructor(private modalCtrl: ModalController, public router: Router, private sharedService: SharedService) {}
  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.BACK',
      clickListener: () => {
        this.dismiss();
      },
      linkTo: '',
      behaviour: 'secondary',
    },
    {
      title: 'BUTTONS.CONFIRM',
      clickListener: () => {
        this.dismiss();
        this.router.navigate(['/game-session-cancel']);
      },
      linkTo: '/game-session-cancel',
      behaviour: 'primary',
    },
  ];
  ngOnInit() {
    this.sharedService.setButtonConfig(this.buttonsConfig);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
