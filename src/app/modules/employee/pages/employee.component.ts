import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Employee } from 'src/app/shared/model/employee';
import { Credential } from 'src/app/shared/model/credential';
import { UserName } from 'src/app/shared/model/userName';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: User[];
  cred: User;
  availableUsername: UserName;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    // this.employeeList = [];
    // this.employeeService.getEmployees().subscribe(l => {
    //   this.employeeList = l;
    //   console.log(l);
    //   console.log("hello");
    //   console.log(this.employeeList);
    // })
  }

}
