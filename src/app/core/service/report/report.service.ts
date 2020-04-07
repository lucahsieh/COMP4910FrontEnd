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

  getReBudgetDays(wpCode: any, labourGradeId: any): Observable<any> {
    let url = this.baseUrl + `api/workpackagereports/${wpCode}/${labourGradeId}`;
    return this.http
      .get<any>(url, this.httpOptions)
      .pipe(
        map(data => data.reBudget)
      )
  }

  getWpReport(wpReportId: any): Observable<WPReport> {
    console.log('call getWpReport');
    let url = this.baseUrl + `api/WorkPackageReports/${wpReportId}`;
    return this.http
      .get<WPReport>(url, this.httpOptions).pipe();
  }
  calculateActual(wpCode, sd: Date, ed: Date, lgId): Observable<any> {
    let sds = this.formateDate(sd);
    let eds = this.formateDate(ed);
    let url = this.baseUrl + `api/WorkPackages/GetTotalHoursByWpIdRange/${wpCode}/${sds}/${eds}/${lgId}`;
    // TODO: change to post
    console.log(url);
    return this.http.get<any>(url, this.httpOptions)
      .pipe(
        map(data => data.totalDays)
      );
  };
  postWpReport(wpr: WPReport): Observable<any> {
    let url = this.baseUrl + `api/WorkPackageReports/`;
    var result = null;
    var body = {
      'workPackageCode': wpr.workPackageCode,
      "reportDate": wpr.reportDate,
      "startDate": wpr.startDate,
      "endDate": wpr.endDate,
      "comment": wpr.comment,
      "workAccomplished": wpr.workAccomplished,
      "workPlanned": wpr.workPlanned,
      "problemsThisPeriod": wpr.problemsThisPeriod,
      "problemsAnticipated": wpr.problemsAnticipated,
      "details": wpr.details
    }
    console.log('postWpReport');
    console.log(JSON.stringify(body));
    console.log(body);
    return this.http.post<WPReport>(url, body, this.httpOptions)
  }
  getProjectReport(pReportId: any): Observable<ProjectReport> {
    let url = this.baseUrl + `api/ProjectReports/${pReportId}`;

    return this.http
      .get<ProjectReport>(url, this.httpOptions).pipe();
  }
  getAllProjectReports(projectId: any): Observable<any> {
    let url = this.baseUrl + `api/ProjectReports/allprojectReports/${projectId}`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }
  getAllWpReports(wpCode: any): Observable<any> {
    let url = this.baseUrl + `api/reports/wpReport/getAllWorkPackageReport/${wpCode}`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  private formateDate(date: any): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
