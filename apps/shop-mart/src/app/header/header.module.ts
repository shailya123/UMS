import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Material/material.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, HttpClientModule, MaterialModule],
  providers: [],
  exports:[HeaderComponent]
})
export class HeaderModule {}
