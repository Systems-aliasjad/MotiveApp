import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { GameSessionDialog } from 'src/app/issues/tv/dialogs/game-session-dialog/game-session-dialog.component';
import { BackendService } from 'src/app/services/backend.service';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

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

  constructor(
    private backendService: BackendService,
    private router: Router,
    private sharedService: SharedService,
    public activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private location: Location
  ) {
    this.subscription = this.activatedRoute.params.subscribe(() => {
      this.updateHeader();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  updateHeader() {
    //this.sharedService.setHeaderConfig('HEADER.ACTIVE_GAME_SESSION', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ACTIVE_GAME_SESSION',
    showBackBtn: true,
  };

  async cancelGameSessionDialog() {
    const modal = await this.modalCtrl.create({
      component: GameSessionDialog,
    });
    return await modal.present();
  }

  closeModal() {
    //TODO: should go to 2.7.19
    this.location.back();
  }

  goToThanks() {
    // this.sharedService.setLoader(true);
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
    //   this.sharedService.setLoader(false);
    //   this.router.navigate(['/thanks']);
    // });
    this.router.navigate(['/thanks']);
  }
}
