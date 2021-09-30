import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'unable-to-watch-package-transfer',
  template: `<app-transfer-package
    [pageContent]="pageContent"
    [cardList]="cardList"
    [button1]="button1"
    (button1Click)="button1Listener($event)"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></app-transfer-package>`,
})
export class UnableToWatchPackageTransferComponent implements OnInit, OnDestroy {
  pageContent: string;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONFIRM_TRANSFER',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
    explanatoryNote: '',
  };
  cardList: any[] = [
    {
      title: 'STB SR#039838920',
      description: 'MAC abcd@1234',
      checked: true,
    },
    {
      title: 'STB SR#039838931',
      description: 'MAC abcd@567',
      checked: false,
    },
    {
      title: 'STB SR#039838920',
      description: 'MAC abcd@789',
      checked: false,
    },
  ];
  formGroup: FormGroup;
  subscription: Subscription;
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
    this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_WATCH_SPECIFIC_CHANNEL_TRANSFER_PACKAGE', false, true);
    this.pageContent = 'MESSAGES.CHOOSE_THE_TV_BOX_YOUD_LIKE_TO_TRANSFER_THE_PACKAGE_TO';
  }

  button1Listener(_event) {
    this.formGroup = _event;
    console.log(this.formGroup.valid);
    this.router.navigate(['issues/tv/unable-to-watch-package-transfer-success']);
  }

  button2Listener() {
    this.router.navigate(['thanks']);
  }
}
