import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { warningImgSrc } from '../../constants/constants';
import { IMotiveButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-generic-error-issues',
  templateUrl: './generic-error-issues.component.html',
  styleUrls: ['./generic-error-issues.component.scss'],
})
export class GenericErrorIssuesComponent implements OnInit {
  subscription: Subscription;
  Section1Data;
  subHeaderSectionTemplate;
  subHeaderSectionData;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.sharedService.setLoader(false);
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
     header: 'MESSAGES.AN_ERROR_OCCURRED',
    paragraphs: ['MESSAGES.SORRY_THE_OPERATION_HAS_TIMEOUT_PLEASE_TRY_AGAIN_AFTER_SOME_TIME'],
    };
  }

  button1Listener() {
    this.router.navigate(['thanks']);
  }
}
