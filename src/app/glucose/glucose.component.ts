import { Component, OnInit } from '@angular/core';
import { Glucose } from '../glucose';

@Component({
  selector: 'app-glucose',
  templateUrl: './glucose.component.html',
  styleUrls: ['./glucose.component.css']
})
export class GlucoseComponent implements OnInit {

  glucose: Glucose = {
    readDate: new Date(),
    glucose: 100
  };

  constructor() { }

  ngOnInit() {
  }

}
