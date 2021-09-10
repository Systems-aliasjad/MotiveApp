import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit, OnDestroy {
  buttonsConfig: IButton[] = [];
  SM: string; //size
  MD: string; //sizeMd
  LG: string; //sizeLg

  subscription1: Subscription;
  subscription2: Subscription;
  constructor(private sharedService: SharedService, private modalCtrl: ModalController) {}
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  ngOnInit() {
    this.subscription1 = this.sharedService.getButtonConfig().subscribe((config: IButton[]) => {
      this.buttonsConfig = config;
    });
    this.subscription2 = this.sharedService.getButtonSize().subscribe((buttonSizes) => {
      this.SM = buttonSizes.SM;
      this.MD = buttonSizes.MD;
      this.LG = buttonSizes.LG;
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
