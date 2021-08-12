import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../core/app-material/app-material.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    DefaultLayoutComponent
  ],
  imports: [
    RouterModule.forChild([]),
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    AsideComponent,
    DefaultLayoutComponent
  ]
})
export class LayoutModule { }
