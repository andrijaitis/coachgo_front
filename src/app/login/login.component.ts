import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as AuthActions from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  posts: Observable<Object>;
  public loginForm: FormGroup;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
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

  // if (loginForm.valid) {
  //   const user: User = loginForm.value;
  // if (this.userService.login(user) === true)  {
  //      loginForm.value = false;
  //      this.router.navigate(['coachdash']);
  //   } else {
  //     alert('bitch u suck, wrong password or email!!!');
  //   }
  // }





    // if (loginForm.valid) {
    //     const user: User = loginForm.value;
    //   this.userService.login(user).subscribe((answer) => {
    //     console.log('zie answer ', answer);
    //     if (answer === true) {
    //       this.router.navigate(['coachdash']);
    //       loginForm.value = false;
    //     } else {
    //       console.log('zie answer ', answer);
    //       alert('bitch u suck, wrong password or email!!!');
    //     }
    //   });
    // }




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


        // this.authService.login(answer.status).subscribe(() => {
         //   if (answer.status === false) {
        //     alert('bitch u suck, wrong password or email!!!');
        //   }

        //      });
  // }

}

}


