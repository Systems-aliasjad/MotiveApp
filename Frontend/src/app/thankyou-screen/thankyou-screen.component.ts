import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-thankyou-screen',
  templateUrl: './thankyou-screen.component.html',
  styleUrls: ['./thankyou-screen.component.scss'],
})
export class ThankyouScreenComponent implements OnInit, OnDestroy {
  buttonConfig: IButton[] = [
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {
        this.goToLandingScreen();
      },
      linkTo: '/',
      behaviour: 'secondary',
    },
  ];
  subscription: Subscription;

  constructor(public router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}

  initialization() {
    this.sharedService.setHeaderConfig('', false, false);
    this.sharedService.setButtonConfig(this.buttonConfig);
  }

  goToLandingScreen = () => {
    this.router.navigate(['/']);
  };
}
