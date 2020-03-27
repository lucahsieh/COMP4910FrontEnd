import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from 'src/app/shared/model/Employee';
import { MODE } from 'src/app/shared/model/MODE';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Alert } from 'src/app/shared/model/Alert';
import { MyToastService } from 'src/app/core/service/my-toast.service';



@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
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
    private router: Router,
    private employeeService: EmployeeService,
    private modalService: BsModalService,
    private myToastService: MyToastService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('empId');
      this.employeeService.getEmployee(id).subscribe(e => this.employee = e);
    });
  }

  openModal(template: TemplateRef<any>) {
    console.log('open')
    console.log(template)
    this.modalRef = this.modalService.show(template);
  }
  resetPw() {
    this.employee.empPassword = '01234';
    this.employeeService.getEmployee(this.employee.employeeId).subscribe(emp => {
      emp.empPassword = '01234';
      this.employeeService.putEmployee(emp);
      this.modalRef.hide();
      this.myToastService.addSuccess('Password Changed', 'Reset to defaul password.');

    })
    //TODO: SHOW MESSAGE.
  }
  
  // btn click event of creation
  onUpdate() {
    console.log(this.employee)
    if (!this.validatePage())
      return;
    console.log("POST employee");
    console.log(JSON.stringify(this.employee));
    this.employeeService.putEmployee(this.employee)
      .subscribe(
        result =>
          console.log(result),
        error =>
          this.myToastService.addError('Update Error', `${error}`),
        () => {
          this.myToastService.addSuccess('Update successfully', `${new Date().toLocaleString()}`);
          this.router.navigate([`/content/employees/view/${this.employee.employeeId}`]);
        }
      );
  }

  // btn click event of cancel
  onCancel(e: any) {
    this.router.navigate([`/content/employees`]);
  }

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


