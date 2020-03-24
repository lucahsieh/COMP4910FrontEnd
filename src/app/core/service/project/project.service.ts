import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
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
  putProject(p: Project): Observable<any> {
    let url = this.baseUrl + `api/projects/${p.projectId}`;
    let employees = [];
    p.employees.forEach(e => {
      let emp = {
        "employeeId": e.employeeId,
        "empFirstName": e.empFirstName,
        "empLastName": e.empLastName
      }
      employees.push(emp);
    })
    let body = {
      "projectId": p.projectId,
      "projectName": p.projectName,
      "projectCode": p.projectCode,
      "budget": p.budget,
      "startDate": p.startDate,
      "endDate": p.endDate,
      "projectManager": {
        "employeeId": p.projectManager.employeeId,
        "empFirstName": p.projectManager.empFirstName,
        "empLastName": p.projectManager.empLastName
      },
      "isClosed": p.isClosed,
      "employees": employees,
      "description": p.description
    };
    console.log(JSON.stringify(body));
    return this.http
      .put<Project>(url, body, this.httpOptions)
      .pipe(catchError(this.handleError("putProject", body)));
  }
  postProject(p: Project): Observable<any> {
    let url = this.baseUrl + `api/projects`;
    let employees = [];
    p.employees.forEach(e => {
      let emp = {
        "employeeId": e.employeeId,
        "empFirstName": e.empFirstName,
        "empLastName": e.empLastName
      }
      employees.push(emp);
    })
    let body = {
      "projectName": p.projectName,
      "projectCode": p.projectCode,
      "budget": p.budget,
      "startDate": p.startDate,
      "endDate": p.endDate,
      "projectManager": {
        "employeeId": p.projectManager.employeeId,
        "empFirstName": p.projectManager.empFirstName,
        "empLastName": p.projectManager.empLastName
      },
      "isClosed": p.isClosed,
      "employees": employees,
      "description": p.description
    };
    console.log(JSON.stringify(body));
    return this.http
      .post<Project>(url, body, this.httpOptions)
      .pipe(catchError(this.handleError("postProject", body)));
  }

  getProjects(empId: any): Observable<Project[]> {
    let url = this.baseUrl + `api/projects/getAllProjectsByEmployeeId/${empId}`;
    return this.http
      .get<Project[]>(url)
      .pipe()
  }

  getProject(id): Observable<Project> {
    let url = this.baseUrl + `api/projects/${id}`;
    return this.http
      .get<Project>(url)
      .pipe()
  }

  checkProjectCode(code: any): Observable<boolean> {
    let url = this.baseUrl + `api/projects/checkProjectCodeAvailability/${code}`;
    return this.http
      .get<boolean>(url)
      .pipe()
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
