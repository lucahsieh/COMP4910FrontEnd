import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/model/employee';

import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/model/user';
import { CheckUserNameResult } from 'src/app/shared/model/CheckUserName';

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
    private messageService: MessageService
  ) { }


  getEmployees(): Observable<Employee[]> {
    let url = this.baseUrl + `api/employees/allemployees`;
    return this.http
      .get<Employee[]>(url)
      .pipe()
  }
  postEmployee(e: Employee): Observable<any> {
    let url = this.baseUrl + `api/timesheets`;
    return this.http
      .post<Employee>(url, e, this.httpOptions)
      .pipe(catchError(this.handleError("postProject", e)));
  }

  // login(): Observable<User> {
  //   let url = this.baseUrl + "api/Credentials/Authenticate";
  //   let newCred = { "CredentialId": "A100001", "Password": "password" };
  //   return this.http.post<User>(url, newCred, this.httpOptions)
  //     .pipe()
  // }

  // getAvailableUsername(): Observable<UserName> {
  //   let url = this.baseUrl + `api/Credentials/AvailableUsername`;
  //   return this.http
  //     .get<UserName>(url, this.httpOptions)
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
