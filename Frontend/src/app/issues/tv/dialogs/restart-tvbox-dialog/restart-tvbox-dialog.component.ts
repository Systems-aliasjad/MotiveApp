import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SharedService } from '../../../../shared/shared.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-restart-tvbox-dialog',
  templateUrl: './restart-tvbox-dialog.component.html',
  styleUrls: ['./restart-tvbox-dialog.component.scss'],
})
export class RestartTvboxDialog implements OnInit, OnDestroy {
  subscription: Subscription;
  quickLinkNextSignal;
  constructor(
    private backendService: BackendService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    public router: Router,
    private sharedService: SharedService
  ) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initialization() {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  gotoMainForm() {
    this.dismiss();
    //  this.router.navigate(['/thanks']);

    if (this.sharedService.getQuickLinksData()) {
      // this.router.navigate(['/landing']);
    } else {
      this.sharedService.setLoader(true);
      this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
        this.sharedService.setLoader(false);
        this.router.navigate(['/thanks']);
      });
    }
  }
}
