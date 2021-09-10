import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { motiveSubscriptions } from '../shared/constants/constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  selectedLang: string;
  landingPageCards;
  codeType;
  showLoader: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, public router: Router) {
    activatedRoute.params.subscribe((params) => {
      this.initialization();
    });
  }

  ngOnInit(): void {}

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setHeaderConfig('HEADER.TECHNICAL_SUPPORT', false, false);
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.codeType = params['code'].toUpperCase() || '3P';
      motiveSubscriptions;
      this.landingPageCards = motiveSubscriptions[this.codeType].landingPageCards;
    });
  }

  handleClick = (route) => {
    this.router.navigate([route]);
  };
}
