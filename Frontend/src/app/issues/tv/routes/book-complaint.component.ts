import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'book-complaint',
  template: `<app-book-complaint
    [headerConfig]="headerConfig"
    [button1]="button1"
    (button1Click)="button1Listener($event)"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></app-book-complaint>`,
})
export class BookComplaintComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.BACK',
    explanatoryNote: '',
  };

  formGroup: FormGroup;
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //this.sharedService.setHeaderConfig('HEADER.BOOK_A_COMPLAINT', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.BOOK_A_COMPLAINT',
    showBackBtn: true,
  };

  button1Listener(_event) {
    this.formGroup = _event;
    this.sharedService.setLoader(true,'MESSAGES.PLEASE_WAIT_WHILE_WE_BOOK_THE_COMPLAINT');
    this.backendService.bookComplaint({ ...this.formGroup.value, issueResolved: false }).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.setApiResponseData({ ...data?.result?.responseData, status: 'open' });
      this.router.navigate(['/issues/tv/complaint-raised-successfull']);
    });
  }

  button2Listener() {
    this.location.back();
  }
}
