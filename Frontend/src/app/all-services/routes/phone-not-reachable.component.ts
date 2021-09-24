import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'all-services-phone-not-reachable',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class PhoneNotReachableComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.BOOK_AN_APPOINTMENT',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    this.sharedService.setHeaderConfig('HEADER.PHONE_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.phoneNotReachableAllServicesSection;
  }

  async button1Listener() {
    this.router.navigate(['/issues/internet/book-appointment']);
  }

  button2Listener() {}
}