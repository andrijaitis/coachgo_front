import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;

  
  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    console.log('theme is changing', this.checked);
  }
}
