import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Employee } from 'src/app/shared/model/employee';
import { UserName } from 'src/app/shared/model/userName';
import { User } from 'src/app/shared/model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 // employeeList: User[];
  cred: User;
  availableUsername: UserName;
  employee : User;

  constructor(private employeeService: EmployeeService, private http: HttpClient) { }

  ngOnInit() {

    // this.employeeList = [];
    // this.employeeService.getEmployees().subscribe(l => {
    //   this.employeeList = l;
    //   console.log(l);
    //   console.log("hello");
    //   console.log(this.employeeList);
    // })

    this.employee = null;

    this.getEmployeeDetails().subscribe((data : any) => {
      console.log(data);
    });
  }


  //do this after
  getEmployeeDetails(){
    var empId = localStorage.getItem("currentUserEmployeeId");
    console.log("inside getemployeedetails, employeeId is: " + empId);
    let baseUrl = environment.authUrl;
    console.log("request url is: " + baseUrl + 'api/Employees/'+ empId)
    return this.http.get<any>(baseUrl + 'api/Employees/'+ empId).pipe();
    // .pipe(map(user => {
    //   console.log("employee details is: " + user);
    //   return user;
    //}));
  }
}
