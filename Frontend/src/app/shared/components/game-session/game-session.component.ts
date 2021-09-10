import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { GameSessionDialog } from '../../dialogs/game-session-dialog/game-session-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-game-session',
  templateUrl: './game-session.component.html',
  styleUrls: ['./game-session.component.scss'],
})
export class GameSessionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  items: any[] = [
    {
      text: 'Call of Duty: Modern Warfare',
      icon: '',
    },
    {
      text: 'Dangerous driving 2018',
      icon: '',
    },
  ];

  constructor(private router: Router, private sharedService: SharedService, public activatedRoute: ActivatedRoute, private modalCtrl: ModalController, private location: Location) {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setHeaderConfig('HEADER.ACTIVE_GAME_SESSION', false);
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.gameSessionButtons));
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

  async cancelGameSessionDialog() {
    const modal = await this.modalCtrl.create({
      component: GameSessionDialog,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  CloseMOdal() {
    this.location.back();
  }
}
