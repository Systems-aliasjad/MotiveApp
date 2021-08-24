import { Injectable } from '@angular/core';
import { IPageHeader } from './constants/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headerConfig: IPageHeader = {
    pageTitle: '',
    singleLine: false,
  };
  constructor() {}

  setHeaderConfig(pageTitle: string, oneLine: boolean) {
    this.headerConfig = {
      pageTitle: pageTitle,
      singleLine: oneLine,
    };
  }
  getHeaderConfig(): IPageHeader {
    return this.headerConfig;
  }
}
