import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
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
  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.Initialization(params);
    });
  }
  ngOnInit(): void {
    localStorage.clear();
  }

  Initialization(params: Params) {
    this.subscribeLoaderChanges();
    console.log('params 1', params);
  //  this.sharedService.setDefaultLanguage('ara');
    // this.appDirection = 'rtl';
    //TODO: uncomment This
    //this.sharedService.setLoader(true);
    if (!params?.token) {
      return;
    }
    console.log('params 2', params);
    this.authService.setAuthorizationToken(params?.token);
    this.sharedService.setDefaultLanguage(params?.lang || 'ara');
    this.appDirection = params?.lang === 'en' ? 'ltr' : 'rtl';
    this.router.navigate(['landing']);

    if (environment.production) {
      window.console.log = function () {}; // disable any console.log debugging statements in production mode
    }

    //TODO: uncomment This
    // TODO: REMOVE THIS
    // this.router.navigate(['landing'], { state: { user: { accountId: '123', username: 'hello' } } });

    // this.backendService.getUserDetail(params?.token, params?.lang).subscribe((data: any) => {
    //   this.authService.setAuthorizationToken(data?.result?.token);
    //   this.sharedService.setLoader(false);
    //   localStorage.setItem('CUS_MOBILE_NO', data?.result?.accountId);
    //   this.router.navigate(['landing'], { state: { user: data?.result } });
    // });
  }

  subscribeLoaderChanges() {
    this.sharedService.getLoader().subscribe((loaderState) => {
      this.showLoader = loaderState;
    });
  }
}
