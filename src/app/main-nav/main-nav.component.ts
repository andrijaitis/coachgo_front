import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Auth } from '../entities/auth.model';
import * as AuthActions from '../actions/auth.actions';
import { AppState } from '../app.state';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {Renderer2} from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { AthleteService } from '../services/athlete.service';
import { OurAthletes } from '../entities/ourAthletes';
import { ModalService } from '../services/modal.service';



// export interface User {
//   firstName: string;
// }

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  auth: Observable<Auth>;
  theme = false;
  
  myControl = new FormControl();
  options: any = [

  ];
  filteredOptions: Observable<OurAthletes[]>;



  @ViewChild('toolbar', {read: ElementRef}) toolbar: ElementRef;
  @ViewChild('toolbar2', {read: ElementRef}) toolbar2: ElementRef;
  @ViewChild('drawer', {read: ElementRef}) drawer: ElementRef;
  @ViewChild('sidenav2', {read: ElementRef}) sidenav2: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private location: Location, private breakpointObserver: BreakpointObserver, private store: Store<AppState>,
     private userService: UserService, private router: Router, private renderer: Renderer2, private el: ElementRef,
     private athleteService: AthleteService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.auth = this.store.select('auth');

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | OurAthletes>(''),
        map(value => typeof value === 'string' ? value : value.firstName),
        map(firstName => firstName ? this._filter(firstName) : this.options.slice())
      );

      this.getAthletes();
  }

  displayFn(ourAthletes?: OurAthletes): string | undefined {
    return ourAthletes ? ourAthletes.firstName : undefined;
  }

  private _filter(firstName: string): OurAthletes[] {
    const filterValue = firstName.toLowerCase();

    return this.options.filter(option => option.firstName.toLowerCase().indexOf(filterValue) === 0);
  }

  logout() {
    this.userService.logout();
    // alert('logged out');
    this.modalService.open('logged out');
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

  goBack(): void {
    this.location.back();
  }

  goToAthlete(id) {
    this.router.navigate([`/blank`]);
    setTimeout(() => {
      this.router.navigate([`/seeall/${id}`]);
    }, 1);

  }

  getAthletes(): void {
    this.athleteService.getAthletes()
      // .subscribe(athletes => this.athletes = athletes);
      .subscribe(athletesfromsrv =>  this.options.push(...athletesfromsrv));
  }
}

