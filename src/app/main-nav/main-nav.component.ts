import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Auth } from '../entities/auth.model';
import * as AuthActions from '../actions/auth.actions';
import { AppState } from '../app.state';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  auth: Observable<Auth>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>,
     private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.auth = this.store.select('auth');
  }

  logout() {
    this.userService.logout();
    alert('logged out');
    this.router.navigate(['/home']);
  }
}

