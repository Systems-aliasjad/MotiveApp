import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../../shared/helper/helper.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  landingPageCards;
  codeType;
  pageTitle = 'Technical Support';
  constructor(private activatedRoute: ActivatedRoute, private helperService: HelperService) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.codeType = params['code'] || '3P';
      this.landingPageCards = this.helperService.filterCard(this.codeType, 'landingPageCards');
    });
  }
}
