import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes, motiveSubscriptions, QUICK_ACTION } from 'src/app/shared/constants/constants';
import { ICard } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quickLinks.component.html',
  styleUrls: ['./quickLinks.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class QuickLinksComponent implements OnInit, OnChanges {
  @Input() codeType: string = '3P';
  quickLinks: ICard[];
  slideOpts = {
    slidesPerView: 5,
    spaceBetween: 5,
  };

  width: number = window.innerWidth;
  mobileWidth: number = 760;
  subscription: Subscription;
  constructor(private router: Router, private actRoute: ActivatedRoute, private backendService: BackendService, private sharedService: SharedService) {
    // this.subscription = this.actRoute.data.subscribe((data) => {
    //   if (this.codeType != undefined) {
    //     this.initialization();
    //   }
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.codeType != undefined) {
      this.initialization();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  initialization() {
    this.quickLinks = motiveSubscriptions[this.codeType].quickLinkCard;
    if(!this.sharedService.getHomeZoneFlag()){
      var links = this.quickLinks.filter((x) => x.linkTo !== '/issues/internet/stage2/reset-wifi-password');
      this.quickLinks = links;
    }
    if(!this.sharedService.getElifeOnFlag()){
      var links = this.quickLinks.filter((x) => x.linkTo !== 'issues/tv/pin-reset-failed' && x.linkTo !== 'issues/tv/quick-transfer-channel-to-another-tvBox')
      this.quickLinks = links;
    }   
    this.setSlideOpts();
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.setSlideOpts();
  }

  setSlideOpts() {
    if (this.width < this.mobileWidth) {
      this.slideOpts = {
        slidesPerView: 2,
        spaceBetween: 5,
      };
    } else {
      this.slideOpts = {
        slidesPerView: 5,
        spaceBetween: 5,
      };
    }
  }

  onClickSeeAllQuickLinks() {
    this.router.navigate(['quick-links-all']);
  }

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

    // else if (this.sharedService.getQuickLinksData()) {
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
          this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal } });
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
        this.sharedService.setApiResponseData(data?.result?.responseData);
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
        this.sharedService.setApiResponseData(data?.result?.responseData);
        this.sharedService.setApiResponseOpenSrs({ openSrs: data?.result?.responseData?.openSrs, data: data });

        this.sharedService.setLoader(false);
        var screenCode = data?.result?.screenCode;

        this.sharedService.TrackRecentComplaintByCode(screenCode);
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
}
