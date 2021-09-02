import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IButton } from '../../constants/types';

@Component({
  selector: 'app-restart-router-dialog',
  templateUrl: './restart-router-dialog.component.html',
  styleUrls: ['./restart-router-dialog.component.css'],
})
export class RestartRouterDialog implements OnInit {
  constructor(private modalCtrl: ModalController, public router: Router) {}
  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.EXIT_TROUBLESHOOTING',
      clickListener: () => {
        this.modalCtrl.dismiss();
        this.router.navigate(['/thanks']);
      },
      linkTo: '/thanks',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.BACK',
      clickListener: () => {
        this.dismiss();
      },
      linkTo: '',
      behaviour: 'link',
    },
  ];
  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
