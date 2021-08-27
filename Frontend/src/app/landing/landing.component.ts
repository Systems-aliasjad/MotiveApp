import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../shared/helper/helper.service';
import { SharedService } from '../shared/shared.service';

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

  constructor(private activatedRoute: ActivatedRoute, private helperService: HelperService, private sharedService: SharedService, public router: Router) {
    this.sharedService.setHeaderConfig('HEADER.TECHNICAL_SUPPORT', false);
  }

  ngOnInit(): void {
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.codeType = params['code'] || '3P';
      this.landingPageCards = this.helperService.filterCard(this.codeType, 'landingPageCards');
    });
  }

  handleClick = (route) => {
    this.router.navigate([route]);
  };
}
