import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';
import * as AuthActions from '../actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Observable<Object>;
  public loginForm: FormGroup;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 

  constructor(private http: HttpClient,
    private fb: FormBuilder, private router: Router,
    private authService: AuthService, private userService: UserService,
    private store: Store<AppState>) {

  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createForm();
  }


  onSubmitLogin(loginForm) {
    if (loginForm.valid) {
      const user: User = loginForm.value;
    this.userService.login(user).subscribe((answer) => {
        if (answer.status === true) {
        localStorage.clear();
        localStorage.setItem('token', answer.token),
        localStorage.setItem('userId', answer.userId),
        this.store.dispatch(new AuthActions.SetUserEmail(answer.usrEmail)),
        this.store.dispatch(new AuthActions.LogIn());
        this.router.navigate(['coachdash']);
        loginForm.value = false;
      } else if (answer.status === false) {
        console.log('zie answer2 ', answer);
        alert('bitch u suck, wrong password or email!!!');
      }
    });
  }

  }

}
