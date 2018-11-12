import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs-compat';


// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = true; //always false
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


