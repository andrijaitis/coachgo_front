import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  posts: Observable<Object>;
  userEmail: String;
  readonly ROOT_URL = 'http://localhost:3000/api/users/login';
  private loginForm: FormGroup;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private fb: FormBuilder, private router: Router,
    private authService: AuthService, private userService: UserService) {

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
      this.userService.login(user).subscribe((answer) => (
        this.authService.login(answer.status).subscribe(() => {
          this.router.navigate(['coachdash']);
          loginForm.value = false;
          if (answer.status === false) {
            alert('bitch u suck, wrong password or email!!!');
          }
        }
        )

      ));

    }

  }

}
