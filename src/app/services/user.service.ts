import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as AuthActions from '../actions/auth.actions';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  theToken: string = null;
  theUser: String = null;
  isLoggedIn = false ;

  constructor(private http: HttpClient, private store: Store<AppState>) {

    this.store.select('auth').subscribe(state => {
      console.log( 'the statie', state.isLoggedIn);
      this.isLoggedIn = state.isLoggedIn;
    });
  }



  addUser(user: User): Observable<User> {
    this.http.post<User>(environment.USERS_URL, user, httpOptions);
    return this.http.post<User>(environment.USERS_URL, user, httpOptions);
  }
  // login(user: User)  {
  //   localStorage.clear();
  //   this.http.post<User>(environment.USERS_URL_login, user, httpOptions).subscribe((answer) => {
  //     localStorage.setItem('token', answer.token),
  //     localStorage.setItem('userId', answer.userId),
  //     this.theToken = answer.token,
  //     this.theUser = answer.userId,
  //     this.store.dispatch(new AuthActions.SetUserEmail(answer.usrEmail)),
  //     this.store.dispatch(new AuthActions.LogIn());
  //   });
  //     return Observable.of(this.isLoggedIn).delay(2000).do(val => {});
  // }

  login(user: User)  {
 
      return this.http.post<User>(environment.USERS_URL_login, user, httpOptions);
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(new AuthActions.LogOut());
    this.store.dispatch(new AuthActions.Reset());
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.theToken;
  }
  getUserID() {
    return this.theUser;
  }


}
