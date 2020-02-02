import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { City } from 'src/app/shared/model/city';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  appid = 'e3af58d9d5e58f975d0cbf176102d731';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getCities(): Observable<City[]> {
    let url = `http://localhost:3000/citylist`;
    return this.http
      .get<City[]>(url)
      .pipe(
        tap(_ => this.alertUser('fetched city')),
        catchError(this.handleError<City[]>(`get cities`))
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
