import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import * as AuthActions from './actions/auth.actions';
import { Auth } from './entities/auth.model';

@Injectable()
export class AuthGuard implements CanActivate {
  // auth: Observable<Auth>;
  isLoggedIn;
    constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {
    // this.auth = this.store.select('auth');
    this.store.select('auth').subscribe(state => {
      console.log(state.isLoggedIn);
      this.isLoggedIn = state.isLoggedIn;
    });
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  // before reduxxx
  //  checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) {
  //     return true;
  //   }
  //   this.authService.redirectUrl = url;
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  checkLogin(url: string): boolean {
    if (this.isLoggedIn) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
