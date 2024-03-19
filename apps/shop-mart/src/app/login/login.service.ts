import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

   login(body:{username:string,password:string}){
    const result = this.httpClient.post<any>('http://localhost:3333/api/user/login',body).pipe(catchError(()=>{
        console.log("something went wrong");
        return from([]);
    }));
    return result;
  }
  register(body:any){
    const result = this.httpClient.post<any>('http://localhost:3333/api/user/register',body).pipe(catchError(()=>{
        console.log("something went wrong");
        return from([]);
    }));
    return result;
  }
}
