import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import {Employee} from 'src/app/shared/model/employee';
import {Credential} from 'src/app/shared/model/credential';

import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  appid = 'e3af58d9d5e58f975d0cbf176102d731';

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }
    
      /** headers in an httpOptions object that will be passed to every HttpClient save method. */
      httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
    
      getEmployees(): Observable<Employee[]> {
        let url = `https://localhost:44318/api/employees/allemployees`;
        //url = `http://localhost:3000/employeeList`;
        return this.http
          .get<Employee[]>(url)
          .pipe(
            
          ) 
        }

      login(): Observable<Credential>{
          let url = "https://localhost:44318/api/Credentials/Authenticate";
          let newCred = {"CredentialId":"A100001", "Password" : "password"};
          return this.http.post<Credential>(url, newCred, this.httpOptions)
          .pipe()
      }

      getAvailableUsername(auth_token): Observable<Employee[]> {
          let headers = new HttpHeaders({
              'Content-Type' : 'application/json',
              'Authorization':  'Bearer ' + auth_token
          })
        let url = `https://localhost:44318/api/Credentials/AvailableUsername`;
        return this.http
          .get<Employee[]>(url, {headers: headers})
          .pipe(
            
          ) 
        }
      }
