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

  constructor(public translate: TranslateService) {
    this.headerConfigSubject = new BehaviorSubject({
      pageTitle: '',
      singleLine: false,
    });
    this.headerConfig$ = this.headerConfigSubject.asObservable();

    ///For Terms and Condition
    this.termsConditionCheck = new BehaviorSubject({
      termsCheck: '',
    });
    this.termsConditionCheck$ = this.termsConditionCheck.asObservable();
    ///For Terms and Condition
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
}
