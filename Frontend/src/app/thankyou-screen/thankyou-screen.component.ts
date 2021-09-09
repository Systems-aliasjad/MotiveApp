import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-thankyou-screen',
  templateUrl: './thankyou-screen.component.html',
  styleUrls: ['./thankyou-screen.component.scss'],
})
export class ThankyouScreenComponent implements OnInit {
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

  constructor(public router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.initialization();
    });
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
