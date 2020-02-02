import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Employee } from 'src/app/shared/model/employee';
import {Credential} from 'src/app/shared/model/credential';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[];
  cred : Credential;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeList = [];
    this.employeeService.getEmployees().subscribe(l => {
      this.employeeList = l;
      console.log(l);
      console.log("hello");
      console.log(this.employeeList);
    })

    this.employeeService.login().subscribe(l =>  {
      this.cred = l;
      console.log(l);
    })

    this.employeeService.getAvailableUsername("eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODA2MjUxNTN9.ifqUv0NY3WKvPIqffdUyMqxP_mcEWi9geJqHnUPgQ6o").subscribe( l => {
      console.log("printing available username: ");
      console.log(l);
    })
  }

}
