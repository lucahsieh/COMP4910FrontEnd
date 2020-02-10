import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { User } from 'src/app/shared/model/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
//import { EmployeeComponent } from 'src/app/modules/employee/employee.module'

@Component({
  // providers: [EmployeeComponent],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  currentUser: User = this.authenticationService.currentUserValue;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    console.log(this.currentUser);
  }

  goToEmployeePage() {
    console.log("inside gotoEmployeePage, local crendetial_Id is: " + JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["credentialId"]) +
      ", employeeId is: " + JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["employeeId"]));
    this.router.navigate(['/content/employees']);

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }
}
