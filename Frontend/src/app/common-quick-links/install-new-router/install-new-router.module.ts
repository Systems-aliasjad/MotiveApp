import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InstallNewRouterComponent } from './install-new-router.component';
import { InstallNewRouterRoutingModule } from './install-new-router.routing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InstallNewRouterComponent],
  imports: [
    CommonModule,
    SharedModule,
    InstallNewRouterRoutingModule,
    IonicModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
})
export class InstallNewRouterModule {}
