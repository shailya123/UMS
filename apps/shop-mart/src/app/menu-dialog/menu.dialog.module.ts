import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Material/material.module';
import { MenuDialogComponent } from './menu.dialog.component';

@NgModule({
  declarations: [MenuDialogComponent],
  imports: [BrowserModule, MaterialModule],
  providers: [],
  exports:[MenuDialogComponent]
})
export class MenuDialogModule {}
