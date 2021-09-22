import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { motiveSubscriptions } from 'src/app/shared/constants/constants';
import { ICard } from 'src/app/shared/constants/types';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-quick-links-all',
  templateUrl: './quick-links-all.component.html',
  styleUrls: ['./quick-links-all.component.scss'],
})
export class QuickLinksAllComponent implements OnInit {
  codeType: string = '3P';
  quickLinks: ICard[];

  width: number = window.innerWidth;
  mobileWidth: number = 760;

  subscription: Subscription;
  constructor(private sharedService: SharedService, private router: Router, private actRoute: ActivatedRoute) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initialization() {
    this.quickLinks = motiveSubscriptions[this.codeType].quickLinkCard;
    this.sharedService.setHeaderConfig('HEADER.QUICK_LINKS', false);
  }

  onCardClick(item) {
    console.log(item.linkTo);
    this.router.navigate([item.linkTo]);
  }
}
