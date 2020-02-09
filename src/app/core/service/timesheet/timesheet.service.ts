import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  baseUrl = environment.apiUrl;

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  postTimesheet(ts: Timesheet): Observable<any> {
    let url = this.baseUrl + `api/timesheets`;
    return this.http
      .post<Timesheet>(url, ts, this.httpOptions)
      .pipe(catchError(this.handleError("postProject", ts)));
  }

  /**
   * 
   * @param id Timesheet ID
   */
  getTimesheet(id: string): Observable<Timesheet> {
    let url = this.baseUrl + `api/timesheets/${id}`;
    return this.http
      .get<Timesheet>(url, this.httpOptions).pipe();
  }

  getAvaliableTimesheetId(): Observable<any> {
    let url = this.baseUrl + `api/timesheets/availableTimesheetId`;
    return this.http
      .get<any>(url, this.httpOptions).pipe();
  }

  getAllTimesheet(): Observable<Timesheet[]> {
    let url = this.baseUrl + `api/timesheets`;
    return this.http
      .get<Timesheet[]>(url, this.httpOptions).pipe();
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
    // this.messageService.add(`WeatherService: ${message}`);
  }
}
