import { Injectable } from '@angular/core';
import { IPageHeader } from './constants/types';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headerConfig: IPageHeader = {
    pageTitle: '',
    singleLine: false,
  };
  constructor(public translate: TranslateService) {}

  setHeaderConfig(pageTitle: string, oneLine: boolean) {
    this.headerConfig = {
      pageTitle: pageTitle,
      singleLine: oneLine,
    };
  }

  getHeaderConfig(): IPageHeader {
    return this.headerConfig;
  }

  setDefaultLanguage(language: string): void {
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }

  getDefaultLanguage(): string {
    return localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  }
}
