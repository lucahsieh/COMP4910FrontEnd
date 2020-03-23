import { Injectable } from '@angular/core';
import { WPReport } from 'src/app/shared/model/WPReport';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { WPReportRow } from 'src/app/shared/model/WPReportRow';
import { ProjectReport } from 'src/app/shared/model/ProjectReport';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl = environment.apiUrl;

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getWpReport(wpReportId: any): Observable<WPReport> {
    console.log('call getWpReport');
    let url = this.baseUrl + `api/reports/wpReport/${wpReportId}`;
    return this.http
      .get<WPReport>(url, this.httpOptions).pipe();
  }
  calculateActual(wpId, sd, ed, lgId): Observable<any> {
    let url = this.baseUrl + `api/reports/wpReport/calculateActual`;
    let body = {
      "workPackageId": wpId,
      "startDate": sd,
      "endDate": ed,
      "labourGradeId": lgId
    };
    // TODO: change to post
    return this.http.get<any>(url, this.httpOptions)
      .pipe(
        map(data => data.totalDays)
      );
  };
  postWpReport(wpr: WPReport): Observable<any> {
    let url = this.baseUrl + `api/reports/wpReport/`;
    var result = null;
    if (!environment.fakeBackend)
      result = this.http.post<WPReport>(url, wpr, this.httpOptions)
    return result;
  }

  getProjectReport(pReportId: any): Observable<ProjectReport> {
    let url = this.baseUrl + `api/reports/projectReport/${pReportId}`;
    return this.http
      .get<ProjectReport>(url, this.httpOptions).pipe();
  }
  getAllProjectReports(projectId: any): Observable<any> {
    let url = this.baseUrl + `api/reports/allprojectReports/${projectId}`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }
  getAllWpReports(wpCode: any): Observable<any> {
    let url = this.baseUrl + `api/reports/wpReport/getAllWpReport/${wpCode}`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }
}
