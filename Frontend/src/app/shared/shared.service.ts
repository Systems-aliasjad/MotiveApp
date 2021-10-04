import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { IPageHeader } from './constants/types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiResponseData: any;
  headerConfigSubject: BehaviorSubject<IPageHeader>;
  headerConfig$: Observable<IPageHeader>;

  termsConditionCheck: BehaviorSubject<boolean>;
  termsConditionCheck$: Observable<boolean>;

  loaderSubject: BehaviorSubject<boolean>;
  loader$: Observable<boolean>;

  defaultHeaderConfig: IPageHeader = {
    pageTitle: '',
    singleLine: false,
    showBackBtn: true,
  };

  constructor(private translate: TranslateService, private router: Router) {
    this.loaderSubject = new BehaviorSubject(false);
    this.termsConditionCheck = new BehaviorSubject<boolean>(false);
    this.headerConfigSubject = new BehaviorSubject(this.defaultHeaderConfig);

    this.loader$ = this.loaderSubject.asObservable();
    this.headerConfig$ = this.headerConfigSubject.asObservable();
    this.termsConditionCheck$ = this.termsConditionCheck.asObservable();
  }

  setApiResponseData(data: any) {
    this.apiResponseData = data;
  }

  getApiResponseData(): any {
    if (this.apiResponseData) {
      return this.apiResponseData;
    } else {
      this.router.navigate(['landing']);
    }
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

  getDefaultLanguage(): string {
    return localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  }

  setLoader(loaderState: boolean): void {
    if (loaderState) {
      this.setHeaderConfig('', false, false);
    }
    this.loaderSubject.next(loaderState);
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
}
