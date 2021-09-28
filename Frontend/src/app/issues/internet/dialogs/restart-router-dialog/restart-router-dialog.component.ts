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
  buttonsConfig: any[] = [
    {
      title: 'BUTTONS.EXIT_TROUBLESHOOTING',
      clickListener: () => {
        this.dismiss();
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
  ngOnInit() {
    this.sharedService.setButtonConfig(this.buttonsConfig);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
