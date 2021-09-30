import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { successImgSrc } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IMotiveButton } from '../../constants/types';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
})
export class GenericErrorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  subHeaderSectionTemplate;
  subHeaderSectionData;
  imgSrc;
  // button1: IMotiveButton = {
  //   type: 'primary',
  //   title: 'BUTTONS.BOOK_A_COMPLAINT',
  // };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.thirdPartyRoutersuccessfullyCase;
  }

  // button1Listener() {
  //   this.router.navigate(['thanks']);
  // }
}
