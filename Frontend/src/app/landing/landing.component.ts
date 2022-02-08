import { AfterViewInit, Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICard, IPageHeader } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';
import { LoaderScriptsEnum, motiveSubscriptions } from '../shared/constants/constants';
import { ModalController } from '@ionic/angular';
import { EIssueFlow, IssueListDialog } from '../shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy, AfterViewInit {
  codeType: string;
  selectedLang: string;
  landingPageCards: ICard[];
  showLoader: boolean = false;
  modal: any;
  user: any;
  constructor(
    private sharedService: SharedService,
    public router: Router,
    private modalCtrl: ModalController,
    private backendService: BackendService,
    private activcatedRoute: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    this.initialization();
  }

  ngOnInit(): void {
    this.activcatedRoute.params.subscribe(() => {
      this.sharedService.setDefaultValues();
    });

  }

  ngOnDestroy(): void {}

  initialization() {
    this.updateProfileData();
    this.getProductCode();
    this.selectedLang = this.sharedService.getDefaultLanguage();
  }

  updateProfileData() {
  }

 async getProductCode() {
    this.sharedService.setLoader(true);
    this.backendService.getLandingPageData().subscribe((data: any) => {
      this.sharedService.setLoader(false);

      this.sharedService.setLocalStorage('CUS_MOBILE_NO', data?.result?.accountId);
      this.user = {
        accountId: data?.result?.accountId ?? '',
        username: data?.result?.username ?? '',
        productName: data?.result?.productName ?? '',
      };

      this.codeType = data?.result?.productCode;
     

      ///TOTo Remove this if flag comes from motive
      this.sharedService.setHomeZoneFlag(true);
      this.sharedService.setElifeOnFlag(true);
      this.sharedService.setCcbPinFlag(true);
     
     

      ///ToDO Uncommment this if flag comes from motive 
      // this.sharedService.setHomeZoneFlag(data?.result?.menuFlags?.HOME_ZONE ?? true);
      // this.sharedService.setElifeOnFlag(data?.result?.menuFlags?.ELIFE_ON ?? true);
      // this.sharedService.setCcbPinFlag(data?.result?.menuFlags?.CCB ?? true);
      this.sharedService.setProductCodeLanding(this.codeType ?? '');
      this.landingPageCards = motiveSubscriptions[this.codeType]?.landingPageCards;
    });



     ///Add deley as fragment issue repoted
     this.sharedService.setLoader(true);
    await this.delay(3000);
    this.sharedService.setLoader(false);


  }


   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.TECHNICAL_SUPPORT',
    showBackBtn: false,
  };

  handleClick = (route) => {
  };

  onCardClick(card) {
    if (card?.customEvent) {
      this[card.customEvent]();
    } else if (card.linkTo != '' && card.linkTo != '#') {
      this.router.navigate([card.linkTo]);
    }
  }

  async openPasswordIssueDialog() {
    await this.openIssueDialog(EIssueFlow.passwordIssue);
  }

  async openInternetIssueDialog() {
    await this.openIssueDialog(EIssueFlow.internetIssue);
  }

  async openTVIssueDialog() {
    await this.openIssueDialog(EIssueFlow.tvIssue);
  }

  async openIssueDialog(eIFlow: EIssueFlow) {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: eIFlow,
      },
    });
    return await this.modal.present();
  }

  hello() {
 
 this.sharedService.setLoader(true,'MESSAGES.PLEASE_WAIT_WHILE_WE_BOOK_THE_COMPLAINT');
 //this.sharedService.setLoader(true,'MESSAGES.gfgfdgfdg');
    //   var data = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.INTERNET_E2E_TROUBLESHOOTING);
//    this.sharedService.setLoader(true, data);


//     setTimeout(()=>{                           //<<<---using ()=> syntax
//      this.sharedService.setLoader(false);
//  }, 145000);
  }
  hello2(){
    this.router.navigate(['issues/internet/unable-connect-newDevice']);
  }
}
