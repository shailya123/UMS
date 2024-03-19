import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../Material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, HttpClientModule, MaterialModule],
  providers: [],
})
export class LoginModule {}
