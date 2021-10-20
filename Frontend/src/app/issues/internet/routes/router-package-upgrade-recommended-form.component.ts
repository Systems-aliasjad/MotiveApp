import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'router-package-upgrade-recommended-form',
  template: `<app-book-complaint
    [headerConfig]="headerConfig"
    [button1]="button1"
    (button1Click)="button1Listener($event)"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></app-book-complaint>`,
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
    // this.sharedService.setHeaderConfig('HEADER.ROUTER_AND_PACKAGE_UPGRADE', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ROUTER_AND_PACKAGE_UPGRADE',
    showBackBtn: true,
  };

  button1Listener(_event) {
    this.formGroup = _event;
    // console.log(this.formGroup.valid);
    this.sharedService.setLoader(true);
    this.backendService.upsellRequest({ ...this.formGroup.value, ci7: true }).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/issues/internet/router-and-package-upgrade-success'], { state: { referenceNo: data?.result?.referenceNo } });
    });
  }

  button2Listener() {
    this.location.back();
  }
}
