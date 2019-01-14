import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper-func',
  templateUrl: './helper-func.component.html',
  styleUrls: ['./helper-func.component.scss']
})
export class HelperFuncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isNumberEven(num: number): boolean {
    return num % 2 === 0;
  }
 
  public isNumberOdd(num: number): boolean {
    return !this.isNumberEven(num);
  }

  compare(a, b) {
    if (a.numberOfIjuries < b.numberOfIjuries) {
      return -1;
    }
    if (a.numberOfIjuries > b.numberOfIjuries) {
      return 1;
    }
    return 0;
  }

}

