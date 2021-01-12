import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-maker',
  templateUrl: './div-maker.component.html',
  styleUrls: ['./div-maker.component.css']
})
export class DivMakerComponent implements OnInit {
  el1;
  circle1 = false;
  circle1Style;

  isCircle() {
    this.circle1 = !this.circle1;
  }

  styleDiv1(event) {
    this.el1 = event.target.el1.value;
  }

  getEl1Size() {
    let elStyle = {
      'height': this.el1 + 'px',
      'width': this.el1 + 'px'
    };
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
