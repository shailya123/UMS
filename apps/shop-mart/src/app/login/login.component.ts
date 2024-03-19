import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
} from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import { AzureAdService } from '../azure-ad-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'shop-mart-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy, OnInit {
  isUserLoggedIn: boolean = false;
  hidePassword: boolean = true;
  _destroy = new Subject<void>();
  loginSubscription$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadCastService: MsalBroadcastService,
    private authService: MsalService,
    private _azureService: AzureAdService,
    private _toastrService: ToastrService,
    private _loginService: LoginService,
    private _commonService: CommonService
  ) {}

  ngOnInit() {
    this.msalBroadCastService.inProgress$
      .pipe(
        filter(
          (interactionStatus: InteractionStatus) =>
            interactionStatus === InteractionStatus.None
        ),
        takeUntil(this._destroy)
      )
      .subscribe((x) => {
        this.isUserLoggedIn =
          this.authService.instance.getAllAccounts().length > 0;
        console.log(this.isUserLoggedIn, 'ngOnit');
        this._azureService.isUserLoggedIn.next(this.isUserLoggedIn);

        if (!this.isUserLoggedIn) {
          this.loginWithSso();
        }
      });
  }

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  submitLoginForm() {
    this.loginSubscription$ = this._loginService
      .login(this.loginForm.value)
      .subscribe((res) => {
        if (res?.access_token) {
          console.log(res.access_token);
          this._commonService.setToken(res.access_token);
          this.router.navigate(['home']);
          this._toastrService.success('Welcome user');
        }
        else{
          this._commonService.snackbar('Invalid credentials, try again!!');
        }
      });
  }

  logout() {
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200',
    });
  }

  loginWithSso() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
      this.router.navigate(['home']);
      this._azureService.isUserLoggedIn.next(this.isUserLoggedIn);
    } else {
      this.authService.loginRedirect();
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }

  ngOnDestroy() {
    this._destroy.next(undefined);
    this._destroy.complete();
    this.loginSubscription$ && this.loginSubscription$.unsubscribe();
  }
}
