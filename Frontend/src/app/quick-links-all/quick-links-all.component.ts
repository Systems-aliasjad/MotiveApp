import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { flowCodes, motiveSubscriptions, QUICK_ACTION } from 'src/app/shared/constants/constants';
import { ICard, IPageHeader } from 'src/app/shared/constants/types';
import { ResetFactoryDefaultDialog } from '../issues/internet/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
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
  constructor(
    private modalCtrl: ModalController,
    private sharedService: SharedService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
    this.initialization();
  }

  ngOnDestroy(): void {}

  initialization() {
    this.codeType = this.sharedService.getproductCodeLanding();
    this.quickLinks = motiveSubscriptions[this.codeType].quickLinkCard;
    // if (!this.sharedService.getHomeZoneFlag()) {
    //   const links = this.quickLinks.filter((x) => x.linkTo !== '/issues/internet/stage2/reset-wifi-password');
    //   this.quickLinks = links;
    // }
    if (!this.sharedService.getElifeOnFlag()) {
      var links = this.quickLinks.filter((x) => x.linkTo !== 'issues/tv/pin-reset-failed');
      this.quickLinks = links;
    }
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

          if(link?.nextSignal===QUICK_ACTION.UPDATE_WIFI_CONFIGURATION){

          if(!res?.result?.responseData?.homeZoneAccount){
                this.router.navigate(['issues/internet/no-home-zone-account-found']);
          }
          else{
             this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal, value: link?.value } });
          }
          }


       else if (link.directCall) {
          this.callDirectCallAPIs(link);
        } else {

         
          //  if(link?.nextSignal===QUICK_ACTION.PNP_FACTORY_RESET){
          //  if(!res?.result?.responseData?.pnpRouter ){
          //        this.router.navigate(['issues/password/unable-to-reset-password']);
          //     }
          //   }

          this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal, value: link?.value } });
        }
      });
    }
  }

  async callDirectCallAPIs(item) {
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
        // debugger;
        // data = {
        //   result: {
        //     responseData: {
        //       status: flowCodes.OPENED,
        //       referenceNo: 'hello moto',
        //     },
        //     screenCode: flowCodes.QACOMFU2,
        //   },
        // };

        // this.sharedService.setApiResponseData({ status: data?.result?.responseData?.status, complaintNature: data?.result?.responseData?.complaintNature });
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

        //Hard Coaded Screens
        //  data.result.screenCode = flowCodes.QASRFU2;
        //   this.sharedService.setApiResponseData({ openSrs: ['123', '456', '789', '101112'], data: data });
        this.sharedService.setLoader(false);

        var screenCode = data?.result?.screenCode;

        this.sharedService.TrackRecentComplaintByCode(screenCode);
      });
    } else if (item?.nextSignal === QUICK_ACTION.PNP_FACTORY_RESET) {
      const quickLinksData = this.sharedService.getQuickLinksData();
      if (quickLinksData?.managed) {
        if (quickLinksData?.pnpRouter) {
          const modal = await this.modalCtrl.create({
            component: ResetFactoryDefaultDialog,
            componentProps: {
              factoryResetQACase: true,
            },
          });
          return await modal.present();
        } else {
          this.router.navigate(['issues/internet/router-restart/device-care']);
        }
      } else {
        this.router.navigate(['issues/password/unable-to-reset-password']);
      }
    }
  }

  goToLanding() {
    this.router.navigate(['landing']);
  }
}
