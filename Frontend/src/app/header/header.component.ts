import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  @Input()
  headerConfig: IPageHeader = null;

  constructor(private sharedService: SharedService, public router: Router, private location: Location) {}
  ngOnDestroy(): void {}
  ngOnInit() {}

  back(): void {
    this.sharedService.setLoader(false);
    this.location.back();
  }
}
