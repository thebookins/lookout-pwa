import { Injectable } from '@angular/core';
import { Glucose } from './glucose';
import { GLUCOSE } from './mock-glucose';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GlucoseService {

  // this will eventually use a HTTP request to get an array of glucose
  // values for the last 3 hours
  // perhaps change name to getGlucoseHistory or something?
  getGlucose(): Observable<Glucose[]> {
    return of(GLUCOSE);
  }

  constructor() { }

}
