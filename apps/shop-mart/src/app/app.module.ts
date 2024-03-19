import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import { AzureAdService } from './azure-ad-service';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { MenuDialogModule } from './menu-dialog/menu.dialog.module';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  {path:'register',component:RegisterComponent}
];
const isIE =
  window.navigator.userAgent.indexOf('MSIE') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    MenuDialogModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HomeModule,
    RegisterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
      }
    ),
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '56a6bc06-4130-4a7d-96a6-d6c83ca6de1d',
          redirectUri: 'http://localhost:4200',
          authority:
            'https://login.microsoftonline.com/04bc5076-e61e-45ce-99e0-49a60ed39641',
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE,
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read'],
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
        ]),
      }
    ),
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    MsalGuard,
    AzureAdService
  ],

  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
