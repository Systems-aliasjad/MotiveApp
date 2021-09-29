import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPageHeader } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerConfig: IPageHeader;
  subscription: Subscription;

  constructor(private sharedService: SharedService, public router: Router, private location: Location) {
    this.subscription = this.sharedService.getHeaderConfig().subscribe((config) => {
      this.headerConfig = config;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {}

  back(): void {
    this.sharedService.setLoader(false);
    this.location.back();
  }
}
