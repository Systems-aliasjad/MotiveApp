import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DefaultLayoutComponent],
  imports: [RouterModule.forChild([]), CommonModule],
  exports: [RouterModule, HeaderComponent, DefaultLayoutComponent],
})
export class LayoutModule {}
