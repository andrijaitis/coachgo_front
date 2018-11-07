import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'couchgo';


  constructor(private authService: AuthService) {

}

  logout() {
    this.authService.logout();
    alert('logged out');
  }
}
