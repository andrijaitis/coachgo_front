import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timeLeft = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft < 600000) {
        this.timeLeft++;
      } else {
        this.timeLeft = 0;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
