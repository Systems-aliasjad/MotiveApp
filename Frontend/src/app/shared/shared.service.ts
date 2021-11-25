import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { IPageHeader } from './constants/types';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LandingProductCodes } from './constants/constants';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiResponseData: any;
  upsellOpportunity: string;
  headerConfigSubject: BehaviorSubject<IPageHeader>;
  headerConfig$: Observable<IPageHeader>;

  termsConditionCheck: BehaviorSubject<boolean>;
  termsConditionCheck$: Observable<boolean>;

  loaderSubject: BehaviorSubject<boolean>;
  loader$: Observable<boolean>;

  encryptedID: string = '';

  tryAgainBoxNotReachableFlag: number = 0;
  tryAgainResetSTBFlag: number = 0;
  tryAgainRouterNotReachableFlag: number = 0;
  tryAgainResetWifiPasswordFlag: number = 0;
  tryAgainResetCCBFlag: number = 0;
  tryAgainUnableElifeFlag: number = 0;
  tryResetInternetPasswordFlag: number = 0;

  defaultHeaderConfig: IPageHeader = {
    pageTitle: '',
    singleLine: false,
    showBackBtn: true,
  };

  apiResponseDataNoIssuesSTB;
  apiResponseDataContinueSTB;
  apiInternetGenericResponse;

  apiResponseHomeZoneCall;

  productCodeLanding: string = '';

  constructor(private translate: TranslateService, private router: Router) {
    this.loaderSubject = new BehaviorSubject(false);
    this.termsConditionCheck = new BehaviorSubject<boolean>(false);
    this.headerConfigSubject = new BehaviorSubject(this.defaultHeaderConfig);

    this.loader$ = this.loaderSubject.asObservable();
    this.headerConfig$ = this.headerConfigSubject.asObservable();
    this.termsConditionCheck$ = this.termsConditionCheck.asObservable();
  }

  setApiResponseHomeZoneCall(data) {
    this.apiResponseHomeZoneCall = data;
  }

  getApiResponseHomeZoneCall() {
    return this.apiResponseHomeZoneCall;
  }

  clearApiResponseHomeZoneCall() {
    this.apiResponseHomeZoneCall = null;
  }

  setTryResetInternetPasswordFlag() {
    this.tryResetInternetPasswordFlag++;
  }

  getTryResetInternetPasswordFlag() {
    return this.tryResetInternetPasswordFlag;
  }
  setTryAgainUnableElifeFlag() {
    this.tryAgainUnableElifeFlag++;
  }

  getTryAgainUnableElifeFlag() {
    return this.tryAgainUnableElifeFlag;
  }
  setTryAgainResetCCBFlag() {
    this.tryAgainResetCCBFlag++;
  }

  getTryAgainResetCCBFlag() {
    return this.tryAgainResetCCBFlag;
  }
  setTryAgainResetWifiPasswordFlag() {
    this.tryAgainResetWifiPasswordFlag++;
  }

  getTryAgainResetWifiPasswordFlag() {
    return this.tryAgainResetWifiPasswordFlag;
  }
  setTryAgainRouterNotReachableFlag() {
    this.tryAgainRouterNotReachableFlag++;
  }

  getTryAgainRouterNotReachableFlag() {
    return this.tryAgainRouterNotReachableFlag;
  }
  setTryAgainBoxNotReachableFlag() {
    this.tryAgainBoxNotReachableFlag++;
  }

  getTryAgainBoxNotReachableFlag() {
    return this.tryAgainBoxNotReachableFlag;
  }
  setTryAgainResetSTBFlag() {
    this.tryAgainResetSTBFlag++;
  }

  getTryAgainResetSTBFlag() {
    return this.tryAgainResetSTBFlag;
  }

  setUpsellOpportunity(opportunityCode: string) {
    this.upsellOpportunity = opportunityCode;
  }

  getUpsellOpportunity(): string {
    return this.upsellOpportunity;
  }

  setApiResponseData(data: any) {
    this.apiResponseData = data;
  }

  getApiResponseData(): any {
    if (this.apiResponseData) {
      return this.apiResponseData;
    }
    //if (environment.shouldCallAPI)
    else if (environment.shouldCallAPI) {
      this.router.navigate(['landing']);
    }
  }
  setApiResponseDataNoIssuesSTB(data: any) {
    this.apiResponseDataNoIssuesSTB = data;
  }

  getApiResponseDataNoIssuesSTB(): any {
    if (this.apiResponseDataNoIssuesSTB) {
      return this.apiResponseDataNoIssuesSTB;
    }
    //if (environment.shouldCallAPI)
    else if (environment.shouldCallAPI) {
      this.router.navigate(['landing']);
    }
  }

  setApiResponseDataSTBContinue(data: any) {
    this.apiResponseDataContinueSTB = data;
  }

  setInternetGenericResponse(data: any) {
    this.apiInternetGenericResponse = data;
  }

  getInternetGenericResponse() {
    return this.apiInternetGenericResponse;
  }


  getApiResponseDataSTBContinue(): any {
    if (this.apiResponseDataContinueSTB) {
      return this.apiResponseDataContinueSTB;
    }
    //if (environment.shouldCallAPI)
    // else if (environment.shouldCallAPI) {
    //   this.router.navigate(['landing']);
    // }
  }

  setHeaderConfig(pageTitle: string, oneLine: boolean, _showBackBtn: boolean = true) {
    this.headerConfigSubject.next({
      pageTitle: pageTitle,
      singleLine: oneLine,
      showBackBtn: _showBackBtn,
    });
  }

  getHeaderConfig(): Observable<IPageHeader> {
    return this.headerConfig$;
  }

  setTermsConditions(terms: boolean) {
    this.termsConditionCheck.next(terms);
  }

  getTermsConditions(): Observable<boolean> {
    return this.termsConditionCheck$;
  }

  setDefaultLanguage(language: string): void {
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }

  getQuickLinksData() {
    return localStorage.getItem('quickLinks') ? JSON.parse(localStorage.getItem('quickLinks')) : null;
  }

  setQuickLinksData(data: any): void {
    localStorage.setItem('quickLinks', JSON.stringify(data));
  }

  getDefaultLanguage(): string {
    return localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  }

  setLoader(loaderState: boolean, messageMain?: String): void {
    const loaderObject: any = {
      loaderState,
      messageMain: messageMain || null,
    };
    this.loaderSubject.next(loaderObject);
  }

  getLoader(): Observable<boolean> {
    return this.loader$;
  }

  setButtonConfig(config: any) {}

  getButtonConfig(): Observable<any[]> {
    return null;
  }

  setButtonSize(config: any) {}

  getButtonSize(): Observable<any> {
    return null;
  }

  setDefaultValues() {
    this.setHeaderConfig('', false, false);
    this.setTermsConditions(false);
    this.setLoader(false);
  }

  checkIfMobileDevice(): boolean {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }

  setProductCodeLanding(code) {
    this.productCodeLanding = code;
  }

  getproductCodeLanding() {
    return this.productCodeLanding;
  }

  createPasswrodIssuesDynamic(passwordIssueList: any[]) {
    var newList = [];
    passwordIssueList.forEach((element) => {
      //for internet or IPTV
      if (element?.ProductID === 1 || element?.ProductID === 2) {
        switch (this.productCodeLanding) {
          case LandingProductCodes._3P:
          case LandingProductCodes._2P:
          case LandingProductCodes.HI:
          case LandingProductCodes.B1:
          case LandingProductCodes.BTP:
          case LandingProductCodes.BDP:
          case LandingProductCodes.BFXI:
          case LandingProductCodes.FD:
          case LandingProductCodes.FH:
          case LandingProductCodes.FT:
            newList.push(element);
        }
      }
      //for reset tv admin pin
      else if (element?.ProductID === 3) {
        switch (this.productCodeLanding) {
          case LandingProductCodes._3P:
          case LandingProductCodes._1P:
          case LandingProductCodes.BSP:
          case LandingProductCodes.BTP:
          case LandingProductCodes.FT:
            newList.push(element);
        }
      } else if (element?.ProductID === 4 || element?.ProductID === 5) {
        newList.push(element);
      }
    });

    return newList;
  }
}
