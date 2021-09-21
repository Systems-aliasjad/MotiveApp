import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-thankyou-screen',
  templateUrl: './thankyou-screen.component.html',
  styleUrls: ['./thankyou-screen.component.scss'],
})
export class ThankyouScreenComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((data) => {
      this.setHeader();
    });
  }

  setHeader() {
    this.sharedService.setHeaderConfig('', false, false);
  }

  goToLandingScreen = () => {
    this.router.navigate(['/']);
  };
}
