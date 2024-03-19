import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'shop-mart-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy, OnInit {
  passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+])[A-Za-z!@#$%^&*()_+]{8,}$/;
  hidePassword: boolean = true;
  registerSubscription$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _toastrService: ToastrService,
    private _commonService: CommonService,
    private _loginService: LoginService
  ) {}

  ngOnInit() {}

  signupForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    contact: ['', Validators.required],
    password: [
      '',
      [Validators.required],
    ],
  });

  submitSignupForm() {
    console.log(this.signupForm.value);
    this.registerSubscription$ = this._loginService
      .register(this.signupForm.value)
      .subscribe((res) => {
    this._commonService.snackbar('User Registered Successfully!!');
        this.router.navigate(['login']);
      });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.registerSubscription$ && this.registerSubscription$.unsubscribe();
  }
}
