import { Injectable } from '@angular/core';
import { Glucose } from './glucose';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GlucoseService {
  private glucoseUrl = 'api/glucose';  // URL to web api

  // this will eventually use a HTTP request to get an array of glucose
  // values for the last 3 hours
  // perhaps change name to getGlucoseHistory or something?
  getGlucose(): Observable<Glucose[]> {
    console.log('trying to get glucose');
    return this.http.get<Glucose[]>(this.glucoseUrl);
  }

  constructor(
    private http: HttpClient) { }
}
