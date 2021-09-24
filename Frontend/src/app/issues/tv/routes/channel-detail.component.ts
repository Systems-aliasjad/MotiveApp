import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'channel-detail',
  template: `<app-package-available [subHeader]="subHeader" [packages]="packages" (button1Click)="(button1Listener)" (button2Click)="(button2Listener)"></app-package-available>`,
})
export class ChannelDetailComponent implements OnInit {
  subscription: Subscription;
  subHeader;
  packages;
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.sharedService.setHeaderConfig('HEADER.CHANNEL_DETAILS', false, true);
  }

  updatePageContent() {
    this.subHeader = 'SUBHEADER.THE_CHANNEL_IS_AVAILABLE_ON_THE_BELOW_TV_BOX';
    this.packages = [
      {
        title: 'Movies Unlimited Premium',
        description: 'STB SR#039838920',
      },
      {
        title: 'Bein Sports',
        description: 'STB SR#039838920',
        checked: false,
      },
      {
        title: 'Pehla Plus',
        description: 'STB SR#039838920',
      },
    ];
  }

  button1Listener() {
    // SKIP_TO_NEXT_STEP
  }

  button2Listener() {
    //  CANCEL
  }
}
