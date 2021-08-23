import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CacheModule } from './cache/cache.module';
import { HttpModule } from './http/http.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { IonicModule } from '@ionic/angular';
import { MessageBuilderComponent } from './message-builder/message-builder.component';
import { SharedModule } from 'src/app/shared/shared.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [AppComponent],
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
