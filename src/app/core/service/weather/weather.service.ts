import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { CurrentWeather } from 'src/app/shared/model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appid = 'e3af58d9d5e58f975d0cbf176102d731';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getWeatherByCityid(id: number): Observable<CurrentWeather> {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${this.appid}`;
    return this.http
      .get<CurrentWeather>(url)
      .pipe(
        map(raw => new CurrentWeather(raw)),
        tap(_ => this.alertUser('fetched weather')),
        catchError(this.handleError<CurrentWeather>(`getWeatherByCityid=${id}`))
      )
  }







  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.alertUser(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private alertUser(message: string) {
    this.messageService.add(`WeatherService: ${message}`);
  }
}
