import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-maker',
  templateUrl: './div-maker.component.html',
  styleUrls: ['./div-maker.component.css']
})
export class DivMakerComponent implements OnInit {
  el1;
  el2;
  circle1 = false;
  circle2 = false;

  isCircle() {
    this.circle1 = !this.circle1;
  }
  isCircle2() {
    this.circle2 = !this.circle2;
  }

  styleDiv1(event) {
    this.el1 = event.target.el1.value;
  }

  getEl1Size() {
    let el1Style = {
      'height': this.el1 + 'px',
      'width': this.el1 + 'px'
    };
    return el1Style;
  }
  styleDiv2(event) {
    this.el2 = event.target.el2.value;
  }

  getEl2Size() {
    let el2Style = {
      'height': this.el2 + 'px',
      'width': this.el2 + 'px'
    };
    return el2Style;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}