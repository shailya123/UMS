import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _commonService: CommonService,
    private _toastrService: ToastrService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this._commonService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      this._toastrService.error('Please login first!!');
      return false;
    }
  }
}
