import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.apiUrl;

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getProjectsByEmployee(empId: number): Observable<any> {
    let url = this.baseUrl + `api/projects/GetProjectsByEmpId/${empId}`;
    return this.http
      .get<any>(url, this.httpOptions).pipe();
  }
  getProjectWpDropdown(empId: any): Observable<any> {
    let url = this.baseUrl + `api/Projects/GetAllProjectsAndLowerWpForEmp/${empId}`;
    return this.http
      .get<any>(url, this.httpOptions).pipe();
  }

}
