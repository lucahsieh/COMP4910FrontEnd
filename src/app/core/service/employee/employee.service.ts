import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/model/Employee';

import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/model/User';
import { CheckUserNameResult } from 'src/app/shared/model/CheckUserName';
import { LabourGrade } from 'src/app/shared/model/LabourGrade';
import { ProjectService } from '../project/project.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  baseUrl = environment.apiUrl;

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private projectService: ProjectService
  ) { }

  getLabourGrades(): Observable<LabourGrade[]> {
    let url = this.baseUrl + `api/LabourGrade`;
    return this.http.get<LabourGrade[]>(url).pipe()
  }

  getEmployee(id): Observable<Employee> {
    let url = this.baseUrl + `api/employees/${id}`;
    return this.http
      .get<Employee>(url)
      .pipe()
  }

  getEmployees(): Observable<Employee[]> {
    let url = this.baseUrl + `api/employees/allemployees`;
    return this.http
      .get<Employee[]>(url)
      .pipe()
  }

  getEmployeesWithinProject(projectId: any): Observable<Employee[]> {
    return this.projectService.getProject(projectId).pipe(map(p => p.employees));
  }
  postEmployee(e: Employee): Observable<any> {
    let url = this.baseUrl + `api/employees`;
    let body = {
      "empUsername": e.empUsername,
      "empPassword": e.empPassword,
      "empCode": e.empCode,
      "labourGradeId": e.labourGrade.labourGradeId,
      "empFirstName": e.empFirstName,
      "empLastName": e.empLastName,
      "timesheetApproverId": e.timesheetApproverId,
      "supervisorId": e.supervisorId,
      "isProjectManager": e.isProjectManager,
      "isAdmin": e.isAdmin,
      "isHumanResources": e.isHumanResources,
      "isActivated": e.isActivated,
      "jobTitleId": e.jobTitleId
    };
    return this.http
      .post<Employee>(url, body, this.httpOptions)
      .pipe(catchError(this.handleError("postEmployee", e)));
  }

  // login(): Observable<User> {
  //   let url = this.baseUrl + "api/Credentials/Authenticate";
  //   let newCred = { "CredentialId": "A100001", "Password": "password" };
  //   return this.http.post<User>(url, newCred, this.httpOptions)
  //     .pipe()
  // }


  getEmployeeDetails() {
    var empId = localStorage.getItem("currentUserEmployeeId");
    console.log("inside getemployeedetails, employeeId is: " + empId);
    let baseUrl = environment.authUrl;
    console.log("request url is: " + baseUrl + 'api/Employees/' + empId)
    return this.http.get<any>(baseUrl + 'api/Employees/' + empId).pipe(
      tap(l => console.log(l)),
    );
    // .pipe(map(user => {
    //   console.log("employee details is: " + user);
    //   return user;
    //}));
  }


  checkUserNameOK(userName: string): Observable<any> {
    let url = this.baseUrl + `api/Credentials/CheckUsernameAvailability/${userName}`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }


  checkUserEmployeeCodeOK(empCode: number): Observable<any> {

    let url = this.baseUrl + `api/Credentials/CheckEmployeeCodeAvailability/${empCode}`;
    return this.http.get<any>(url, this.httpOptions).pipe();
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
