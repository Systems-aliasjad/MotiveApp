import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DefaultLayoutComponent],
  imports: [RouterModule.forChild([]), CommonModule, IonicModule.forRoot()],
  exports: [RouterModule, HeaderComponent, DefaultLayoutComponent],
})
export class LayoutModule {}
