import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../core/home/home.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, HomeComponent, BannerComponent],
  exports:[HeaderComponent, BannerComponent]
})
export class CoreModule { }
