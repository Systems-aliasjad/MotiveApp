import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'router-package-upgrade-recommended-form',
  template: `<app-book-complaint [button1]="button1" (button1Click)="button1Listener($event)" [button2]="button2" (button2Click)="button2Listener()"></app-book-complaint>`,
})
export class RouterPackageUpgradeRecommendedFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
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
    this.sharedService.setHeaderConfig('HEADER.ROUTER_AND_PACKAGE_UPGRADE', false);
  }

  button1Listener(_event) {
    this.formGroup = _event;
    console.log(this.formGroup.valid);
    this.router.navigate(['/issues/internet/router-and-package-upgrade-success']);
  }

  button2Listener() {
    this.location.back();
  }
}
