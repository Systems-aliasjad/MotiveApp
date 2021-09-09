import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache/cache.service';
import { StorageType } from './cache/storages/storage-type.enum';
import { environment } from '../environments/environment';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appDirection: string = 'rtl';
  showLoader: boolean = false;
  constructor(private cacheService: CacheService, public sharedService: SharedService) {
    // this.cacheService.saveData('test', 'test', StorageType.sessionStorage);
  }
  ngOnInit(): void {
    const selectedLang = this.sharedService.getDefaultLanguage();
    this.appDirection = selectedLang === 'en' ? 'ltr' : 'rtl';
    this.sharedService.setDefaultLanguage(selectedLang);
    this.sharedService.getLoader().subscribe((loaderState) => {
      this.showLoader = loaderState;
    });
    if (environment.production) {
      window.console.log = function () {}; // disable any console.log debugging statements in production mode
    }
  }
}
