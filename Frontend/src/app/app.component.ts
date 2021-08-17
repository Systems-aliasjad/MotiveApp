import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache/cache.service';
import { StorageType } from './cache/storages/storage-type.enum';
import { SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //  routes: AppRouterLink[] = [];
  title = 'TIRS Submission';
  constructor(private cacheService: CacheService, private swUpdate: SwUpdate, private router: Router) {
    this.cacheService.saveData('test', 'test', StorageType.sessionStorage);
  }
  ngOnInit(): void {
    if (environment.production) {
      window.console.log = function () {}; // disable any console.log debugging statements in production mode
    }

    //  this.loadRoutes();
    this.checkForNewVersion();
    // if (this.authService.isAuthenticated()) {
    //     this.router.navigateByUrl('/secUser');
    // }
  }

  checkForNewVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}

// class AppRouterLink {
//     constructor(link: string, name: string, hide: boolean=false) {
//         this.link = link;
//         this.name = name;
//         this.hide = hide;
//     }
//     public link: string;
//     public name: string;
//     public hide:boolean;
// }
