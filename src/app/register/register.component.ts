import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entities/user';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm;
  constructor(private userService: UserService, private http: HttpClient, private router: Router,
    private fb: FormBuilder) { }

  users: User[];
  posts: Observable<any>;

  ngOnInit() {

    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }


  onSubmit(registerForm) {
    if (registerForm.valid) {
      console.log('submiting');
      const user: User = registerForm.value;
      this.userService.addUser(user).subscribe();
      registerForm.value = false;
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000);
    } else {
    }
  }

}
