import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _snackBar: MatSnackBar) {}

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    localStorage.getItem('accessToken');
  }

  isUserLoggedIn():boolean{
    return !!localStorage.getItem('accessToken')
  }

  signOut(){
    localStorage.clear();
  }

  snackbar(message:string){
this._snackBar.open(message,'',{
        duration: 3000,
        panelClass:'center-snackbar-content',
        verticalPosition:'bottom',
        horizontalPosition:'center'
})
  }
}
