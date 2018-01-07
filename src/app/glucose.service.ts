import { Injectable } from '@angular/core';
import { Glucose } from './glucose';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as io from 'socket.io-client';

@Injectable()
export class GlucoseService {
  private glucoseUrl = 'api/glucose';  // URL to web api
  private url = 'http://localhost:4200';
  private socket;

  // this will eventually use a HTTP request to get an array of glucose
  // values for the last 3 hours
  // perhaps change name to getGlucoseHistory or something?
  getGlucose(): Observable<Glucose[]> {
    // TODO: this is a workaround for https://stackoverflow.com/q/46559268
    return this.http.get<any>(this.glucoseUrl).pipe(
      // TODO: this is a workaround for https://stackoverflow.com/q/46559268
      map(response => JSON.parse(JSON.stringify(response), this.reviver) as Glucose[]),
      tap(glucose => this.log(`fetched glucose`)),
      catchError(this.handleError('getGlucose', []))
    );
  }

  x: number;

  get glucose() {
    console.log('in glucose getter');
    let glucose = 100;
    let observable = new Observable<Glucose>(observer => {
      // TODO: we probably don't need to connect to the socket again each time
      this.socket = io.connect('/');
      this.socket.on('glucose', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable.pipe(
      tap(glucose => this.log(`got glucose of ${glucose.glucose}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private reviver (key, value): any {
    if (value !== null && (key === 'readDate'))
      return new Date(value);
    return value;
  }

  /** Log a GlucoseService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GlucoseService: ' + message);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
