import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache/cache.service';
import { StorageType } from './cache/storages/storage-type.enum';
import { environment } from '../environments/environment';
import { SharedService } from './shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from './services/backend.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appDirection: string = 'rtl';
  showLoader: boolean = false;
  constructor(
    public sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService,
    private authService: AuthService,
    private router: Router
  ) {
    // this.cacheService.saveData('test', 'test', StorageType.sessionStorage);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.Initialization();
    });
  }

  Initialization() {
    this.sharedService.setLoader(true);
    this.backendService.getUserDetail('KKnKASBiRKMbsHvOMzcEwQjGjqeN7iscdkoft/AGsMI=', 'en').subscribe((data: any) => {
      this.authService.setAuthorizationToken(data?.result?.token);
      this.sharedService.setLoader(false);
      this.router.navigate(['landing'], { state: { user: data?.result } });
    });
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
