import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'game-session-dialog',
  templateUrl: './game-session-dialog.component.html',
  styleUrls: ['./game-session-dialog.component.scss'],
})
export class GameSessionDialog implements OnInit {
  constructor(private backendService: BackendService, private sharedService: SharedService, private modalCtrl: ModalController, public router: Router) {}
  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    this.dismiss();

    this.backendService.problemPlayingGame().subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.code === 200) {
        this.router.navigate(['issues/tv/game-session-cancel']);
      } else if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
        this.router.navigate(['/unknown-issue']);
      }
    });

    // this.router.navigate(['issues/tv/game-session-cancel']);
  }
}
