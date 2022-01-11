import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { IPageHeader } from './constants/types';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { flowCodes, LandingProductCodes, LoaderScriptsEnum, QUICK_ACTION, TsOutcome } from './constants/constants';
import { BackendService } from '../services/backend.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiResponseData: any;
  iptvPortNumber;
  secondDialogApiResponseFromOtherFlow: any;
  OtherApiResponseData: any;
  upsellOpportunity: string;
  headerConfigSubject: BehaviorSubject<IPageHeader>;
  headerConfig$: Observable<IPageHeader>;

  termsConditionCheck: BehaviorSubject<boolean>;
  termsConditionCheck$: Observable<boolean>;

  loaderSubject: BehaviorSubject<boolean>;
  loader$: Observable<boolean>;
  storage: any[] = [];

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
  homeZoneFlag;
  eLifeOnFlag;
  ccbPinFlag;

  apiResponseDataNoIssuesSTB;
  apiResponseDataContinueSTB;
  apiInternetGenericResponse;

  apiResponseHomeZoneCall;
  apiResponseOpenSrs;

  productCodeLanding: string = '';

  LoaderData: any;

  tsOutcome:string=''

  constructor(private http: HttpClient, private translate: TranslateService, private router: Router, private backendService: BackendService) {
    this.loaderSubject = new BehaviorSubject(false);
    this.termsConditionCheck = new BehaviorSubject<boolean>(false);
    this.headerConfigSubject = new BehaviorSubject(this.defaultHeaderConfig);

    this.loader$ = this.loaderSubject.asObservable();
    this.headerConfig$ = this.headerConfigSubject.asObservable();
    this.termsConditionCheck$ = this.termsConditionCheck.asObservable();
  }


  GetTsOutCome(){
    return this.tsOutcome;
  }
  SetTsOutCome(value){
     this.tsOutcome=value;
  }




  GetJsonFile() {
    var lang = this.getLocalStorage('lang');
    if (!lang) {
      lang = 'en';
    }
    var obj = this.http.get(`assets/i18n/${lang}.json`);
    obj.subscribe((data: any) => {
      this.LoaderData = data?.Loader;
    });
    // return obj;
  }

  GetLoaderData() {
    return this.LoaderData;
  }

  GetLoaderDataByID(ID) {
    return this.LoaderData[ID];
   
  }

  setApiResponseOpenSrs(data) {
    this.apiResponseOpenSrs = data;
  }

  getApiResponseOpenSrs() {
    return this.apiResponseOpenSrs;
  }

  setOtherApiResponseData(data) {
    this.OtherApiResponseData = data;
  }

  getOtherApiResponseData() {
    return this.OtherApiResponseData;
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

  resetTryAgainRouterNotReachableFlag() {
    this.tryAgainRouterNotReachableFlag = 0;
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
    this.setLocalStorage('lang', language);
    this.translate.use(language);
  }

  getQuickLinksData() {
    return this.getLocalStorage('quickLinks') ? JSON.parse(this.getLocalStorage('quickLinks')) : null;
  }

  setQuickLinksData(data: any): void {
    this.setLocalStorage('quickLinks', JSON.stringify(data));
  }

  getDefaultLanguage(): string {
    return this.getLocalStorage('lang') ? this.getLocalStorage('lang') : 'en';
  }

  setLoader(loaderState: boolean, messageMain?: any): void {
     messageMain= messageMain==undefined? '': messageMain;
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

  getLocalStorage(key) {
    if (this.storage.length === 0) return '';

    return this.storage.find((x) => x.key === key)?.value ?? '';
  }

  setLocalStorage(key, value) {
    if (this.storage.length === 0) this.storage.push({ key: key, value: value });
    else {
      var index = this.storage.find((x) => x.key == key);

      if (index === undefined) {
        this.storage.push({ key: key, value: value });
      } else {
        this.storage = this.storage.filter((x) => x.key != key);
        this.storage.push({ key: key, value: value });
      }
    }
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
    if (!this.getElifeOnFlag()) {
      newList = newList.filter((data) => data.ProductID !== 4);
    }
    if (!this.getCcbPinFlag()) {
      newList = newList.filter((data) => data.ProductID !== 5);
    }
    return newList;
  }

  TrackRecentComplaintByCode(screenCode) {
    switch (screenCode) {
      case flowCodes.E2ECRM31:
        this.router.navigate(['track-request/try-again-error']);
        break;
      case flowCodes.E2ECRM33:
        this.router.navigate(['track-request/request-detail']);
        break;
      case flowCodes.E2ECRM35:
        this.router.navigate(['track-request/request-already-exists']);
        break;
      case flowCodes.E2ECRM36:
        this.router.navigate(['track-request/request-under-process']);
        break;
      case flowCodes.E2ECRM37:
        this.router.navigate(['track-request/request-in-process']);
        break;
      case flowCodes.E2ECRM38:
        this.router.navigate(['track-request/service-unavailable']);
        break;
      case flowCodes.E2ECRM39:
        this.router.navigate(['track-request/action-required']);
        break;
      case flowCodes.E2ECRM310:
      case flowCodes.E2ECRM311:
        this.router.navigate(['track-request/appointment-set-successfully']);
        break;
      case flowCodes.E2ECRM312:
        this.router.navigate(['track-request/work-not-completed']);
        break;
      case flowCodes.E2ECRM313:
        this.router.navigate(['track-request/request-already-exists']);
        break;
      case flowCodes.E2ECRM314:
      case flowCodes.E2ECRM315:
        this.router.navigate(['track-request/request-detail']);
        break;
      case flowCodes.E2ECRM316:
      case flowCodes.E2ECRM317:
      case flowCodes.E2ECRM318:
      case flowCodes.E2ECRM319:
      case flowCodes.E2ECRM320:
      case flowCodes.E2ECRM321:
      case flowCodes.E2ECRM322:
      case flowCodes.E2ECRM324:
        this.router.navigate(['track-request/request-in-process']);
        break;

      case flowCodes.QASRFU2:
        this.router.navigate(['/track-request/open-srs']);
        break;
      default:
        this.router.navigate(['/track-request/request-not-found-message']);
        break;

      // case flowCodes.E2ECRM323:
      //   this.router.navigate(['track-request/action-required']);
      //   break;
    }
  }

  setHomeZoneFlag(homeZone) {
    this.homeZoneFlag = homeZone;
  }

  getHomeZoneFlag() {
    return this.homeZoneFlag;
  }
  setElifeOnFlag(eLifeOn) {
    this.eLifeOnFlag = eLifeOn;
  }
  getElifeOnFlag() {
    return this.eLifeOnFlag;
  }
  setCcbPinFlag(ccbPin) {
    this.ccbPinFlag = ccbPin;
  }
  getCcbPinFlag() {
    return this.ccbPinFlag;
  }

  CallApiTrackRecentRequest() {
    this.setLoader(true);
    this.backendService.quickActionsInitialData().subscribe((res) => {
      this.setQuickLinksData(res?.result?.responseData);
      this.setApiResponseData(res?.result?.responseData);

      this.backendService.quickActionsNextStep(QUICK_ACTION.SR_FOLLOWUP).subscribe((data) => {
        this.setApiResponseData(data?.result?.responseData);
        this.setApiResponseOpenSrs({ openSrs: data?.result?.responseData?.openSrs, data: data });
        this.setLoader(false);
        var screenCode = data?.result?.screenCode;
        this.TrackRecentComplaintByCode(screenCode);
      });
    });
  }

  TicketCloseAPICallWithURL(link) {
    this.backendService.bookComplaint({ mobileNo: this.getLocalStorage('CUS_MOBILE_NO'), remarks: '', issueResolved: true }).subscribe(() => {});
    this.router.navigate([link]);
  }
  setSecondInternetIssueDialogFromOtherApiResponse(data){
    this.secondDialogApiResponseFromOtherFlow = data;
  }
  getSecondInternetIssueDialogFromOtherApiResponse(){
    return this.secondDialogApiResponseFromOtherFlow;
  }

  setIptvPortNumber(data){
    this.iptvPortNumber = data;
  }

  getIptvPortNumber(){
    return this.iptvPortNumber;
  }
}
