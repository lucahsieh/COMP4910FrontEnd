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
    console.log('postTimesheet');
    console.log(ts);
    let timesheetRows = [];
    ts.timesheetRows.forEach(r => {
      console.log('each timesheet row')
      console.log(r)
      timesheetRows.push(
        {
          "monday": r.monday,
          "tuesday": r.tuesday,
          "wednesday": r.wednesday,
          "thursday": r.thursday,
          "friday": r.friday,
          "saturday": r.saturday,
          "sunday": r.sunday,
          "projectId": r.projectId,
          "timesheetVersionNumber": ts.versionNumber,
          "workPackageId": r.workPackageId,
          "timesheetId": r.timesheetId
        }
      );
    });
    var body = {
      "signature": ts.signature,
      "comment": ts.comment,
      "flexTime": ts.flexTime,
      "overTime": ts.overTime,
      "weekEndingIn": ts.weekEndingIn,
      "weekNumber": ts.weekNumber,
      "timesheetId": ts.timesheetId,
      "employeeId": ts.employeeId,
      "versionNumber": ts.versionNumber,
      "status": ts.status,
      "timesheetRows": timesheetRows
    }
    console.log(JSON.stringify(body));
    return this.http
      .post<any>(url, body, this.httpOptions)
      .pipe(catchError(this.handleError("postProject", body)));
  }

  putTimesheet(ts: Timesheet): Observable<any> {
    let url = this.baseUrl + `api/timesheets/${ts.timesheetId}/${ts.versionNumber}`;
    console.log(`put timesheet`)
    console.log(ts)
    return this.http
      .put<any>(url, ts, this.httpOptions)
      .pipe(catchError(this.handleError("putProject", ts)));
  }

  /**
   * 
   * @param id Timesheet ID
   */
  getTimesheet(id: any): Observable<Timesheet> {
    let url = this.baseUrl + `api/timesheets/${id}`;
    return this.http
      .get<Timesheet>(url, this.httpOptions).pipe();
  }

  getPendingTimesheets(aprId: any): Observable<Timesheet[]> {
    let url = this.baseUrl + `api/Timesheets/GetTimesheetsByApproverId/${aprId}`;
    return this.http
      .get<Timesheet[]>(url, this.httpOptions).pipe();
  }

  getAvaliableTimesheetId(): Observable<any> {
    let url = this.baseUrl + `api/timesheets/availableTimesheetId`;
    return this.http
      .get<any>(url, this.httpOptions).pipe();
  }

  getAllTimesheet(empId: any): Observable<Timesheet[]> {
    let url = this.baseUrl + `api/Timesheets/GetTimesheetsByEmpId/${empId}`;
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
