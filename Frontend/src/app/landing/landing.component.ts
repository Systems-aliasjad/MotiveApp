import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ICard } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';
import { motiveSubscriptions } from '../shared/constants/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  codeType: string;
  selectedLang: string;
  landingPageCards: ICard[];
  showLoader: boolean = false;
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, public router: Router) {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.initialization(params);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  initialization(params: Params) {
    this.sharedService.setDefaultValues();
    this.codeType = params['code'].toUpperCase() || '3P';
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.sharedService.setHeaderConfig('HEADER.TECHNICAL_SUPPORT', false, false);
    this.landingPageCards = motiveSubscriptions[this.codeType].landingPageCards;
  }

  handleClick = (route) => {
    this.router.navigate([route]);
  };
}
