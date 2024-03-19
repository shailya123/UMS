import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Material/material.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [BrowserModule, HttpClientModule, MaterialModule,ReactiveFormsModule],
  providers: [],
})
export class RegisterModule {}
