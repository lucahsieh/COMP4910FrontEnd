import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from 'src/app/shared/model/Employee';
import { MODE } from 'src/app/shared/model/MODE';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Alert } from 'src/app/shared/model/Alert';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee;
  mode = MODE.Update;
  alerts = {};
  modalRef: BsModalRef;
  validUsername: boolean = true;
  validEmployeeCode: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('empId');
      this.employeeService.getEmployee(id).subscribe(e => this.employee = e);
    });
  }

  openModal(template: TemplateRef<any>) {
    console.log('opne')
    console.log(template)
    this.modalRef = this.modalService.show(template);
  }
  resetPw() {
    this.employee.empPassword = '01234';
  }
  // btn click event of creation
  onUpdate() {
    if (!this.validatePage())
      return;
    console.log("POST employee");
    console.log(JSON.stringify(this.employee));
    this.employeeService.postEmployee(this.employee).subscribe();
  }

  // btn click event of cancel
  onCancel() { }

  validatePage(): boolean {
    var result = true;
    if (!this.employee.empFirstName === null || this.employee.empFirstName.match(/^ *$/) !== null) {
      this.alerts['firstName'] = new Alert('danger', 5000, `First Name cannot be empty`);
      result = false;
    }
    if (!this.employee.empLastName === null || this.employee.empLastName.match(/^ *$/) !== null) {
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
    }
    return result;
  }

}


