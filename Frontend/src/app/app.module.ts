import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpModule } from './http/http.module';
import { CacheModule } from './cache/cache.module';
import { environment } from '../environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './landing/profile/profile.component';
import { QuickLinksComponent } from './landing/quickLinks/quickLinks.component';
import { MessageBuilderComponent } from './message-builder/message-builder.component';
import { QuickLinksAllComponent } from './quick-links-all/quick-links-all.component';
import { LoaderComponent } from './loader/loader.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, LandingComponent, LoaderComponent, ProfileComponent, QuickLinksComponent, MessageBuilderComponent, QuickLinksAllComponent],
  imports: [
    SharedModule,
    RoutingModule,
    FlexLayoutModule,
    CacheModule,
    HttpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],

  entryComponents: [],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
