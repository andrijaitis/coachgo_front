import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-simple-graph',
  templateUrl: './simple-graph.component.html',
  styleUrls: ['./simple-graph.component.scss']
})
export class SimpleGraphComponent implements OnInit {
  @Input() gameInput;

  constructor() { }
  public graph = {
    data: this.gameInput,
  };

  // public graph = {
  //   data: [{
  //     x: ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"],
  //     y: [1, 3, 6],
  //     type: 'scatter'
  //   }],
  // };

  test () {
    console.log(this.gameInput);
  }

  ngOnInit() {
  }
}


