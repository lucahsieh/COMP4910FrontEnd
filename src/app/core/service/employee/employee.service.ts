import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/model/employee';

import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserName } from 'src/app/shared/model/userName';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  baseUrl = environment.apiUrl;
  appid = 'e3af58d9d5e58f975d0cbf176102d731';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** headers in an httpOptions object that will be passed to every HttpClient save method. */
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getEmployees(): Observable<User[]> {
    let url = this.baseUrl + `api/employees/allemployees`;
    //url = `http://localhost:3000/employeeList`;
    return this.http
      .get<User[]>(url)
      .pipe()
  }

  // login(): Observable<User> {
  //   let url = this.baseUrl + "api/Credentials/Authenticate";
  //   let newCred = { "CredentialId": "A100001", "Password": "password" };
  //   return this.http.post<User>(url, newCred, this.httpOptions)
  //     .pipe()
  // }

  getAvailableUsername(): Observable<UserName> {
    let url = this.baseUrl + `api/Credentials/AvailableUsername`;
    return this.http
      .get<UserName>(url, this.httpOptions)
      .pipe()
  }

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
}
