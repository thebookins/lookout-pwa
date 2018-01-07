import { Component, OnInit } from '@angular/core';
import { GlucoseService } from '../glucose.service';
import { Glucose } from '../glucose';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'app-glucose',
  templateUrl: './glucose.component.html',
  styleUrls: ['./glucose.component.css']
})

// const GLUCOSE: Glucose = {
//   readDate: new Date(),
//   glucose: 100
// };

export class GlucoseComponent implements OnInit {

  glucose: Observable<Glucose>;
  // glucose: Observable<Glucose> = of({
  //     readDate: new Date(),
  //     glucose: 100
  //   });

  // get glucose(): Observable<Glucose> {
  //   return of(this.glucosey);
  // }

  constructor(private glucoseService: GlucoseService) { }

  ngOnInit() {
    this.glucose = this.glucoseService.glucose;
  }

}
