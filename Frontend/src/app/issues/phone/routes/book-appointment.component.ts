import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'book-appointment',
  template: `<app-book-complaint [button1]="button1" (button1Click)="button1Listener($event)" [button2]="button2" (button2Click)="button2Listener()"></app-book-complaint>`,
})
export class BookAppointmentComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.BOOK_AN_APPOINTMENT',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.BACK',
    explanatoryNote: '',
  };

  formGroup: FormGroup;
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    this.sharedService.setHeaderConfig('HEADER.BOOK_A_COMPLAINT', false);
  }

  button1Listener(_event) {
    this.formGroup = _event;
    console.log(this.formGroup.valid);
    this.router.navigate(['/issues/phone/issue-not-fixed-message']);
  }

  button2Listener() {
    this.location.back();
  }
}
