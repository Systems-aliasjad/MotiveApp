import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * Reset Telephone Code Control Barring (CCB) PIN
 */
@Component({
  selector: 'reset-ccb-pin',
  template: `working`,
})
export class ResetCcbPinComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.BACK',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    this.sharedService.setHeaderConfig('HEADER.RESET_CCB_PIN', true);
  }

  button1Listener() {
    this.router.navigate(['/issues/phone/forgot-ccb-pin-message']);
  }

  button2Listener() {
    this.router.navigate(['']);
  }
}
