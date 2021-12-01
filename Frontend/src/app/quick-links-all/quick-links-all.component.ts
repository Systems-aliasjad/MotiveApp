import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { flowCodes, motiveSubscriptions, QUICK_ACTION } from 'src/app/shared/constants/constants';
import { ICard, IPageHeader } from 'src/app/shared/constants/types';
import { BackendService } from '../services/backend.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-quick-links-all',
  templateUrl: './quick-links-all.component.html',
  styleUrls: ['./quick-links-all.component.scss'],
})
export class QuickLinksAllComponent implements OnInit {
  codeType: string;
  quickLinks: ICard[];

  width: number = window.innerWidth;
  mobileWidth: number = 760;

  subscription: Subscription;
  constructor(private sharedService: SharedService, private router: Router, private actRoute: ActivatedRoute, private backendService: BackendService) {}

  ngOnInit(): void {
    this.initialization();
  }

  ngOnDestroy(): void {}

  initialization() {
    this.codeType = this.sharedService.getproductCodeLanding();
    this.quickLinks = motiveSubscriptions[this.codeType].quickLinkCard;
    // this.sharedService.setHeaderConfig('HEADER.QUICK_LINKS', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.QUICK_LINKS',
    showBackBtn: true,
  };

  onCardClick(link) {
    if (link?.isDeepLink) {
      if (link.body === 'QUICK_LINKS.I_WANT_TO_UPGRADE_MY_ELIFE_PACKAGE') {
        if (this.sharedService.checkIfMobileDevice()) {
          window.location.href = 'https://etisalatmobileapp.page.link/elife';
        } else {
        }
      } else {
      }
    } else if (link?.isDeviceCare) {
      this.router.navigate(['/issues/internet/router-not-restarted/device-care']);
    }
    //  else if (this.sharedService.getQuickLinksData()) {
    //   if (link.directCall) {
    //     this.callDirectCallAPIs(link);
    //   } else {
    //     this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal } });
    //   }
    // }
    else {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);
        if (link.directCall) {
          this.callDirectCallAPIs(link);
        } else {
          this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal,  value: link?.value } });
        }
      });
    }
  }

  callDirectCallAPIs(item) {
    if (item?.nextSignal === QUICK_ACTION.RESET_ELIFEON_PASSWORD) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((data) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAIPTVELON) {
          this.router.navigate(['issues/tv/reset-elife-pin-success'], { state: { userID: data?.responseData?.userID } });
        } else if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
          this.router.navigate(['issues/password/unable-to-process-request']);
        } else {
          //if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
          this.router.navigate(['issues/tv/unable-elife-error-occur-try-again-later']);
        }
      });
    } else if (item?.nextSignal === QUICK_ACTION.RESET_INTERNET_PASSWORD) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((data) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAHSIPR) {
          this.router.navigate(['/issues/internet/password-reset-success']);
        } else {
          //if (data?.result?.screenCode === flowCodes.QAHSIPR1) {
          this.router.navigate(['/issues/internet/reset-internet-passowrd-error-occur-try-again-later']);
        }
        // else {
        //   this.router.navigate(['/unknown-issue']);
        // }
      });
    } else if (item?.nextSignal === QUICK_ACTION.COMPLAINT_FOLLOWUP) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((data) => {
        this.sharedService.setApiResponseData({ status: data?.result?.responseData?.status, complaintNature: data?.result?.responseData?.complaintNature });
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QACOMFU2) {
          if (data?.result?.responseData?.status === flowCodes.OPENED) {
            this.router.navigate([item?.linkTo]);
          } else {
            this.router.navigate(['/track-complaint/complaint-details-resolved-message']);
          }
        } else {
          this.router.navigate(['/track-complaint/complaint-not-found-message']);
        }
      });
    } else if (item?.nextSignal === QUICK_ACTION.SR_FOLLOWUP) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((data) => {
        this.sharedService.setApiResponseData({ openSrs: data?.result?.responseData?.openSrs, data: data });
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QACOMFU2) {
          this.router.navigate(['/track-request/open-srs']);
        } else {
          this.router.navigate(['/track-request/work-not-completed']);
        }
      });
    } else if (item?.nextSignal === QUICK_ACTION.PNP_FACTORY_RESET) {
      const quickLinksData = this.sharedService.getQuickLinksData();
      if (quickLinksData?.pnpRouter) {
        this.sharedService.setLoader(true);
        this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((res) => {
          this.sharedService.setLoader(false);
          if (res?.result?.screenCode === flowCodes.QAHSIPnPFR) {
            this.router.navigate(['/thanks']);
          } else if (res?.result?.screenCode === flowCodes.QAHSIPnPFR5) {
            this.router.navigate(['/issues/internet/router-reset-successful']);
          } else if (res?.result?.screenCode === flowCodes.QAHSIPnPFR1) {
            this.router.navigate(['/issues/internet/server-timeout']);
          } else {
            this.router.navigate(['/unknown-issue']);
          }
        });
      } else {
        this.router.navigate(['issues/internet/router-restart/device-care']);
      }
    }
  }

  goToLanding() {
    this.router.navigate(['landing']);
  }
}
