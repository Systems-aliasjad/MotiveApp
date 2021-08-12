import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from '../routing/routing.module';
import { AppMaterialModule } from '../core/app-material/app-material.module';
import { AppAgGridModule } from '../base/components/app-ag-grid/app-ag-grid.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CacheModule } from '../cache/cache.module';
import { HttpModule } from '../http/http.module';
import { CoreModule } from '../core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { LoggingModule } from '../logging/logging.module';
import { CommonModule } from '@angular/common';
import { TRCCommonPopupComponent } from '../base/components/trc-common-popup/trc-common-popup.component';
import { BaseModule } from '../base/base.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../shared/store/reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
};

@NgModule({
    declarations: [AppComponent, TRCCommonPopupComponent],
    imports: [
        CoreModule,
        RoutingModule,
        AppMaterialModule,
        AppAgGridModule,
        FlexLayoutModule,
        CacheModule,
        HttpModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        LoggingModule,
        CommonModule,
        BaseModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule,
        PerfectScrollbarModule,
    ],

    entryComponents: [TRCCommonPopupComponent],
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
