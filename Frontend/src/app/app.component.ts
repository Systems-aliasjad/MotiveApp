import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache/cache.service';
import { StorageType } from './cache/storages/storage-type.enum';
import { environment } from '../environments/environment';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appDirection: string = 'rtl';
  constructor(private cacheService: CacheService, public sharedService: SharedService) {
    this.cacheService.saveData('test', 'test', StorageType.sessionStorage);
    this.appDirection = this.sharedService.getDefaultLanguage() === 'en' ? 'ltr' : 'rtl';
  }
  ngOnInit(): void {
    if (environment.production) {
      window.console.log = function () {}; // disable any console.log debugging statements in production mode
    }
  }
}
