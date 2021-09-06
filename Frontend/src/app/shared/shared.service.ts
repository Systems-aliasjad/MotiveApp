import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { IButton, IButtonSize, IPageHeader } from './constants/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headerConfigSubject: BehaviorSubject<IPageHeader>;
  headerConfig$: Observable<IPageHeader>;

  termsConditionCheck: BehaviorSubject<boolean>;
  termsConditionCheck$: Observable<boolean>;

  loaderSubject: BehaviorSubject<boolean>;
  loader$: Observable<boolean>;

  buttonsConfigSubject: BehaviorSubject<IButton[]>;
  buttonsConfig$: Observable<IButton[]>;

  buttonSizeSubject: BehaviorSubject<IButtonSize>;
  buttonSize$: Observable<IButtonSize>;

  constructor(public translate: TranslateService) {
    this.loaderSubject = new BehaviorSubject(false);
    this.buttonsConfigSubject = new BehaviorSubject(null);
    this.termsConditionCheck = new BehaviorSubject<boolean>(false);
    this.headerConfigSubject = new BehaviorSubject({
      pageTitle: '',
      singleLine: false,
    });
    this.buttonSizeSubject = new BehaviorSubject({
      SM: '',
      MD: '',
      LG: '',
    });

    this.loader$ = this.loaderSubject.asObservable();
    this.buttonSize$ = this.buttonSizeSubject.asObservable();
    this.headerConfig$ = this.headerConfigSubject.asObservable();
    this.buttonsConfig$ = this.buttonsConfigSubject.asObservable();
    this.termsConditionCheck$ = this.termsConditionCheck.asObservable();
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
    this.loaderSubject.next(loaderState);
  }
  getLoader(): Observable<boolean> {
    return this.loader$;
  }

  setButtonConfig(config: IButton[]) {
    this.buttonsConfigSubject.next(config);
  }

  getButtonConfig(): Observable<IButton[]> {
    return this.buttonsConfig$;
  }

  setButtonSize(config: IButtonSize) {
    this.buttonSizeSubject.next(config);
  }

  getButtonSize(): Observable<IButtonSize> {
    return this.buttonSize$;
  }
}
