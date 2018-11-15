import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  private loggedInUser: any;
  redirectUrl: string;

  login(status): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      this.isLoggedIn = status; // status must be true for login
    });
  }

  logout() {
      this.isLoggedIn = false;
      console.log('logged outddd');

  }






}


