import { Injectable } from '@angular/core';
import { WPReport } from 'src/app/shared/model/WPReport';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    let url = this.baseUrl + `api/reports/wpReport/${wpReportId}`;
    return this.http
      .get<WPReport>(url, this.httpOptions).pipe();
  }
}
