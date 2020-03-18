import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WpService } from 'src/app/core/service/wp/wp.service';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';

@Component({
  selector: 'app-wp-create',
  templateUrl: './wp-create.component.html',
  styleUrls: ['./wp-create.component.css']
})
export class WpCreateComponent implements OnInit {

  wp: WorkPackage;

  alerts = {};
  mode = MODE.Create;

  constructor(
    private wpService: WpService
  ) {}

  ngOnInit() {
    this.wp = new WorkPackage();
    this.wp.projectName = "The Best Project";
    this.wp.projectId = 11223344;
  }

  validatePage(): boolean {
    var result = true;
    if (!this.wp.workPackageTitle === null || this.wp.workPackageTitle.match(/^ *$/) !== null) {
      this.alerts['firstName'] = new Alert('danger', 5000, `First Name cannot be empty`);
      result = false;
    }
/*    if (!this.wp.contractor === null || this.wp.workPackageId.match(/^ *$/) !== null) {
      this.alerts['lastName'] = new Alert('danger', 5000, `Last Name cannot be empty`);
      result = false;
    }
     if (!this.validUsername) {
      this.alerts['userName'] = new Alert('danger', 5000, `User Name: ${this.employee.empUsername} is not allowed`);
      result = false;
    }
    if (!this.validEmployeeCode) {
      this.alerts['employeeCode'] = new Alert('danger', 5000, `Employee ID : ${this.employee.empCode} is not allowed`);
      result = false;
    } */
    return result;
  }
}
