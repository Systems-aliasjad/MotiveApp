import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-unable-homezone-connection',
  templateUrl: './unable-homezone-connection.component.html',
  styleUrls: ['./unable-homezone-connection.component.scss'],
})
export class UnableHomezoneConnectionComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private router: Router, public sharedService: SharedService, private activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(() => {
      this.updateHeader();
    });
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.DEVICE_CONNECTED_TO_HOME_ZONE',
    showBackBtn: true,
  };

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.DEVICE_CONNECTED_TO_HOME_ZONE', false);
  }

  button1Listener() {
    this.router.navigate(['issues/internet/reset-wifi-password']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
