import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'couchgo';

  @HostListener('window:onbeforeunload', ['$event'])
  clearLocalStorage(event) {
      localStorage.clear();
  }



  constructor(private authService: AuthService) {

}

  logout() {
    this.authService.logout();
    alert('logged out');
  }
}
