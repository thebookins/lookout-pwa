import { Injectable } from '@angular/core';
import { Glucose } from './glucose';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GlucoseService {
  private glucoseUrl = 'api/glucose';  // URL to web api

  // this will eventually use a HTTP request to get an array of glucose
  // values for the last 3 hours
  // perhaps change name to getGlucoseHistory or something?
  getGlucose(): Observable<Glucose[]> {
    // TODO: send the message _after_ fetching the glucose
    this.messageService.add('GlucoseService: fetched glucose');
//    return this.http.get<Glucose[]>(this.glucoseUrl).map(x => (new Glucose {readDate: x.readDate, glucose: x.glucose}));
    return this.http.get<any>(this.glucoseUrl).map(response => {
      console.log(response);
      return JSON.parse(JSON.stringify(response), this.reviver) as Glucose[];
    });
    // return this.http.get<any>(this.glucoseUrl).map(response => {
    //   console.log(response);
    //   return JSON.parse(JSON.stringify(response), this.reviver)) as Glucose[];
    // });
    // this.http.get(this.glucoseUrl, {responseType: 'text'})
    // .map()
  }

  private reviver (key, value): any {
    if (value !== null && (key === 'readDate'))
      return new Date(value);
    return value;
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
