import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache/cache.service';
import { StorageType } from './cache/storages/storage-type.enum';
import { environment } from '../environments/environment';
import { SharedService } from './shared/shared.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackendService } from './services/backend.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appDirection: string;
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
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.Initialization(params);
    });
  }

  Initialization(params: Params) {
    //TODO: uncomment This
    // this.sharedService.setLoader(true);
    if (!params?.token) {
      return;
    }
    this.subscribeLoaderChanges();
    // TODO: REMOVE THIS
    this.sharedService.setDefaultLanguage('en');
    this.appDirection = 'ltr';
    this.router.navigate(['landing'], { state: { user: { accountId: '123', username: 'hello' } } });

    //TODO: uncomment This
    // this.sharedService.setDefaultLanguage(params?.lang || 'ara');
    // this.appDirection = params?.lang === 'en' ? 'ltr' : 'rtl';
    // this.backendService.getUserDetail(params?.token, params?.lang).subscribe((data: any) => {
    //   this.authService.setAuthorizationToken(data?.result?.token);
    //   this.sharedService.setLoader(false);
    //   this.router.navigate(['landing'], { state: { user: data?.result } });
    // });

    if (environment.production) {
      window.console.log = function () {}; // disable any console.log debugging statements in production mode
    }
  }

  subscribeLoaderChanges() {
    this.sharedService.getLoader().subscribe((loaderState) => {
      this.showLoader = loaderState;
    });
  }
}
