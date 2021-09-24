import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ERoutingIds } from '../../../../shared/constants/constants';

@Component({
  selector: 'app-package-available',
  templateUrl: './package-available.component.html',
  styleUrls: ['./package-available.component.scss'],
})
export class PackageAvailableComponent implements OnInit {
  // unable-to-watch-package-available
  // package-available

  @Input()
  subHeader: string;
  @Input()
  packages: any;
  @Output()
  button1Click = new EventEmitter();
  @Output()
  button2Click = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit() {}

  goToTransferPackage() {
    if (ERoutingIds.packageavailable) {
      // this.router.navigate(['/package-transfer']);
    } else if (ERoutingIds.enableWatchSpecificChannelpackageavailable) {
      // this.router.navigate(['/unable-to-watch-package-transfer']);
    }
  }

  button1Listener() {
    this.router.navigate(['/issues/tv/transfer-package/step1']);
  }

  button2Listener() {
    this.router.navigate(['unable-to-watch-specific-channel']);
  }
}
