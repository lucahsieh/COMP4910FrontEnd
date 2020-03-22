import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { LabourGrade } from 'src/app/shared/model/LabourGrade';

@Injectable({
  providedIn: 'root'
})
export class WpService {
  baseUrl = environment.apiUrl;

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getLabourGrades(): Observable<LabourGrade[]> {
    let url = this.baseUrl + `api/LabourGrade`;
    return this.http.get<LabourGrade[]>(url).pipe()
  }

  getAllWp(): Observable<WorkPackage[]> {
    let url = this.baseUrl + `api/WorkPackages/getAllWp`;
    return this.http.get<WorkPackage[]>(url).pipe()
  }

  getAllWpByEmployeeId(id): Observable<WorkPackage[]> {
    let url = this.baseUrl + `/api/WorkPackages/getAllWpByEmployeeId/${id}`;
    return this.http.get<WorkPackage[]>(url).pipe();
  }

  getWpByWpId(id): Observable<WorkPackage>{
    let url = this.baseUrl + `/api/WorkPackages/${id}`;
    return this.http.get<WorkPackage>(url).pipe();
  }

  getAllWpByProjectId(): Observable<WorkPackage[]> {
    let url = this.baseUrl + `api/WorkPackages/getAllWpByProjectId`;
    return this.http.get<WorkPackage[]>(url).pipe();
  }

  postWorkPackage(w: WorkPackage): Observable<any> {
    let url = this.baseUrl + `api/WorkPackages`;
    let body = {
      "projectId": w.projectId,
      "projectName": w.projectName,
      "workPackageCode": w.workPackageCode,
      "workPackageTitle": w.workPackageTitle,
      "contractor": w.contractor,
      "issueDate": w.issueDate,
      "isClosed": w.isClosed,
      "responsibleEngineer": w.responsibleEngineer,
      "parentWorkPackageId": w.parentWorkPackageId,
      "workers": w.workers,
    }
    return this.http
    .post<WorkPackage>(url, body, this.httpOptions)
    .pipe(catchError(this.handleError("postWorkPackage", w)));
  }

  putWorkPackage(w: WorkPackage): Observable<any> {
    let url = this.baseUrl + `api/WorkPackages`;
    let body = {
      "projectId": w.projectId,
      "projectName": w.projectName,
      "workPackageCode": w.workPackageCode,
      "workPackageTitle": w.workPackageTitle,
      "contractor": w.contractor,
      "issueDate": w.issueDate,
      "isClosed": w.isClosed,
      "responsibleEngineer": w.responsibleEngineer,
      "parentWorkPackageId": w.parentWorkPackageId,
      "workers": w.workers,
    }
    return this.http
    .put<WorkPackage>(url, body, this.httpOptions)
    .pipe(catchError(this.handleError("putWorkPackage", w)));
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
