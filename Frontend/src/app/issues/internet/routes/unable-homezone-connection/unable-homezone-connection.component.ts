import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  updateHeader() {
    this.sharedService.setHeaderConfig('HEADER.DEVICE_CONNECTED_TO_HOME_ZONE', false);
  }

  button1Listener() {
    this.router.navigate(['/reset-wifi-password-form']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
