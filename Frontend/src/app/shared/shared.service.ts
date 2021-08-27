import { Injectable } from '@angular/core';
import { observable, BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { IPageHeader } from './constants/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headerConfigSubject: BehaviorSubject<IPageHeader>;
  headerConfig$: Observable<IPageHeader>;
  constructor(public translate: TranslateService) {
    this.headerConfigSubject = new BehaviorSubject({
      pageTitle: '',
      singleLine: false,
    });
    this.headerConfig$ = this.headerConfigSubject.asObservable();
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

  setDefaultLanguage(language: string): void {
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }

  getDefaultLanguage(): string {
    return localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  }
}
