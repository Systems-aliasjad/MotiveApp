import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes, OWN_ROUTER, THIRD_PARTY_ROUTER } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-install-new-router',
  templateUrl: './install-new-router.component.html',
  styleUrls: ['./install-new-router.component.scss'],
})
export class InstallNewRouterComponent implements OnInit {
  routers = [
    {
      title: 'Etisalat Router',
      ID: OWN_ROUTER,
    },
    {
      title: 'Third party Router',
      ID: THIRD_PARTY_ROUTER,
    },
  ];
  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INSTALL_ROUTER',
    showBackBtn: true,
  };
  selectedRadioItem: string = '';
  constructor(private router: Router, private backendService: BackendService, private sharedService: SharedService) {}

  ngOnInit() {}

  button1Listener() {
    var apiResponeQuickAll = this.sharedService.getQuickLinksData();

    if (apiResponeQuickAll.pnpRouter && this.selectedRadioItem === THIRD_PARTY_ROUTER) {
      this.router.navigate(['issues/internet/install-new-route/pnp-port-managed-router']);
    } else {
      this.sharedService.setLoader(true);
      this.backendService.installNewRouterRequest(this.selectedRadioItem).subscribe((data: any) => {
        this.sharedService.setLoader(false);

        var screenCode = data?.result?.screenCode;

        if (screenCode === flowCodes.QANRINST) {
          this.router.navigate(['issues/internet/router-install-successfully']);
        } else if (screenCode === flowCodes.DCSS1 || screenCode === flowCodes.DCSS2 || screenCode === flowCodes.QANRINST12) {
          this.router.navigate(['issues/internet/install-new-router-care']);
        } else {
          this.router.navigate(['issues/internet/router-installation-failed']);
        }
      });
    }
  }

  radioGroupChange(event) {
    this.selectedRadioItem = event.detail.value;
  }
}
