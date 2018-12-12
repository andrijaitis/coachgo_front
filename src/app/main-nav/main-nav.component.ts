import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Auth } from '../entities/auth.model';
import * as AuthActions from '../actions/auth.actions';
import { AppState } from '../app.state';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {Renderer2} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  auth: Observable<Auth>;
  theme = false;
  

  @ViewChild('toolbar', {read: ElementRef}) toolbar: ElementRef;
  @ViewChild('toolbar2', {read: ElementRef}) toolbar2: ElementRef;
  @ViewChild('drawer', {read: ElementRef}) drawer: ElementRef;
  @ViewChild('sidenav2', {read: ElementRef}) sidenav2: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>,
     private userService: UserService, private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.auth = this.store.select('auth');
  }

  logout() {
    this.userService.logout();
    alert('logged out');
    this.router.navigate(['/home']);
  }
// theme changer
  changeTheme() {
    // this.renderer.setStyle(this.toolbar.nativeElement, 'background', 'e0387e');
    if (this.theme === false) {
      this.theme = true;
      this.toolbar.nativeElement.style.backgroundColor = 'black';
      this.toolbar2.nativeElement.style.backgroundColor = 'black';
      this.drawer.nativeElement.style.backgroundColor = 'grey';
      this.sidenav2.nativeElement.style.backgroundColor = 'grey';
    } else {
      this.theme = false;
      this.toolbar.nativeElement.style.backgroundColor = '#673ab7';
      this.toolbar2.nativeElement.style.backgroundColor = '#673ab7';
      this.drawer.nativeElement.style.backgroundColor = '#fafafa';
      this.sidenav2.nativeElement.style.backgroundColor = '#fafafa';
    }

    


  }

}

