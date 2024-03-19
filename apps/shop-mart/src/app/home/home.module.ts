import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Material/material.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, HttpClientModule, MaterialModule,HeaderModule],
  providers: [],
})
export class HomeModule {}
