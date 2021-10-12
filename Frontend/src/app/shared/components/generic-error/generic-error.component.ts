import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { warningImgSrc } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';

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
    this.imgSrc = warningImgSrc;
    this.Section1Data = {
      header: 'MESSAGES.YOUR_OLD_SESSION_IS_CURRENTLY_IN_PROGRESS',
      paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
    };
  }

  // button1Listener() {
  //   this.router.navigate(['thanks']);
  // }
}
