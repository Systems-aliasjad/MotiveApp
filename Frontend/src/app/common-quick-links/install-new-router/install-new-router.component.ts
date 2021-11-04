import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OWN_ROUTER, THIRD_PARTY_ROUTER } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';

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
    pageTitle: 'BUTTONS.INSTALL_ROUTER',
    showBackBtn: true,
  };
  selectedRadioItem;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('====================================');
    console.log('asdsad');
    console.log('====================================');
  }

  radioGroupChange(card) {
    // this.router.navigate(['/package-transfer']);
  }

  button1Listener() {
    // this.router.navigate(['/issues/tv/transfer-package/step1']);
  }

  button2Listener() {
    // this.router.navigate(['issues/tv/unable-to-watch-specific-channel']);
  }
}
