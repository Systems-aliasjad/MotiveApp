import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IButton } from '../../constants/types';
import { RestartRouterDialog } from '../../dialogs/restart-router-dialog/restart-router-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-care',
  templateUrl: './device-care.component.html',
  styleUrls: ['./device-care.component.scss'],
})
export class DeviceCareComponent implements OnInit {
  selectedLang: string;
  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      clickListener: () => {
        this.router.navigate(['/thanks']);
      },
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {
        this.continueTroubleShoot();
      },
      linkTo: '',
      behaviour: 'link',
    },
  ];
  constructor(private sharedService: SharedService, private modalCtrl: ModalController, public router: Router) {
    this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
  }

  ngOnInit() {}

  async continueTroubleShoot() {
    const modal = await this.modalCtrl.create({
      component: RestartRouterDialog,
    });
    return await modal.present();
  }
}
