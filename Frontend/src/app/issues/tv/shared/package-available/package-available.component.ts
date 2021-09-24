import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../../../../shared/constants/constants';
import { SharedService } from '../../../../shared/shared.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-package-available',
  templateUrl: './package-available.component.html',
  styleUrls: ['./package-available.component.scss'],
})
export class PackageAvailableComponent implements OnInit, OnDestroy {
  // unable-to-watch-package-available
  // package-available
  subscription: Subscription;

  @Input()
  subHeader: string;
  @Input()
  packages: any;
  @Output()
  button1Click = new EventEmitter();
  @Output()
  button2Click = new EventEmitter();
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();

    if (ERoutingIds.packageavailable) {
      this.subHeader = 'AVAILABLE_PACKAGE.DESCRIPTION';
    }
    /// Unable to watch specific channel package available
    else if (ERoutingIds.enableWatchSpecificChannelpackageavailable) {
      this.subHeader = 'AVAILABLE_PACKAGE.DESCRIPTION_UNABLE_WATCH_SPECIFIC_CHANNEL';
      this.sharedService.setHeaderConfig('HEADER.CHANNEL_DETAILS', false, true);
    }
  }

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  goToTransferPackage() {
    if (ERoutingIds.packageavailable) {
      this.router.navigate(['/package-transfer']);
    } else if (ERoutingIds.enableWatchSpecificChannelpackageavailable) {
      this.router.navigate(['/unable-to-watch-package-transfer']);
    }
  }

  button1Listener() {
    this.router.navigate(['/issues/tv/transfer-package/step1']);
  }

  button2Listener() {
    this.router.navigate(['unable-to-watch-specific-channel']);
  }
}
