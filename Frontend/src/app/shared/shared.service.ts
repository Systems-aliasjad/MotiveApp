import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { IPageHeader, ITermsAndConditions } from './constants/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headerConfigSubject: BehaviorSubject<IPageHeader>;
  headerConfig$: Observable<IPageHeader>;

  termsConditionCheck: BehaviorSubject<ITermsAndConditions>;
  termsConditionCheck$: Observable<ITermsAndConditions>;

  loaderSubject: BehaviorSubject<boolean>;
  loader$: Observable<boolean>;

  constructor(public translate: TranslateService) {
    this.headerConfigSubject = new BehaviorSubject({
      pageTitle: '',
      singleLine: false,
    });
    this.termsConditionCheck = new BehaviorSubject({
      termsCheck: '',
    });
    this.loaderSubject = new BehaviorSubject(false);

    this.headerConfig$ = this.headerConfigSubject.asObservable();
    this.termsConditionCheck$ = this.termsConditionCheck.asObservable();
    this.loader$ = this.loaderSubject.asObservable();
  }

  setHeaderConfig(pageTitle: string, oneLine: boolean) {
    this.headerConfigSubject.next({
      pageTitle: pageTitle,
      singleLine: oneLine,
    });
  }

  getHeaderConfig(): Observable<IPageHeader> {
    return this.headerConfig$;
  }

  setTermsConditions(terms: string) {
    this.termsConditionCheck.next({
      termsCheck: terms,
    });
  }

  getTermsConditions(): Observable<ITermsAndConditions> {
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
    this.loaderSubject.next(loaderState);
  }
  getLoader(): Observable<boolean> {
    return this.loader$;
  }
}
