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
      title: 'Etisilat Router',
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
    this.backendService.installNewRouterRequest(this.selectedRadioItem).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.QANRINST) {
        if (this.selectedRadioItem === OWN_ROUTER) {
          this.router.navigate(['issues/internet/install-new-router']);
        } else if (this.selectedRadioItem === THIRD_PARTY_ROUTER) {
          this.router.navigate(['issues/internet/install-new-router-care']);
        }
      } else if (data?.result?.screenCode === flowCodes.QANRINST1) {
        this.router.navigate(['issues/internet/router-installation-failed']);
      }
    });
  }

  radioGroupChange(event) {
    this.selectedRadioItem = event.detail.value;
  }
}
