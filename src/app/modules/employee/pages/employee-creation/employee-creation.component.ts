import { Component, OnInit, TemplateRef, Pipe, PipeTransform } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { MyToastService } from 'src/app/core/service/my-toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.css']
})
export class EmployeeCreationComponent implements OnInit {

  employee: Employee;
  grade: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  selectedGrade: SelectItem;
  selectedSupervisor: SelectItem;
  // userName validation
  validUsername: boolean = false;
  validEmployeeCode: boolean = false;
  alerts = {};
  mode = MODE.Create;

  constructor(
    private employeeService: EmployeeService,
    private myToastService: MyToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee.isActivated = true;
    this.employee.empPassword = "01234";
  }

  // btn click event of creation
  onCreate(e: any) {
    if (!this.validatePage())
      return;
    console.log("POST employee");
    console.log(JSON.stringify(this.employee));
    this.employeeService.postEmployee(this.employee)
      .subscribe(
        result =>
          console.log(result),
        error =>
          this.myToastService.addError('Update Error', `${error}`),
        () => {
          this.myToastService.addSuccess(`Employee created Successfully`, `Employee ${this.employee.empFirstName + ' ' + this.employee.empLastName} created. ${new Date().toLocaleString()}`);
          this.router.navigate([`/content/employees`]);
        }
      )
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
  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }



  // exit event of emp id field
  validateEmployeeCode() {
    this.employeeService.checkUserEmployeeCodeOK(this.employee.empCode)
      .subscribe(response => {
        console.log(response);
        this.validEmployeeCode = response;
      });
  }

  // exit event of user name
  validateUserName() {
    this.employeeService.checkUserNameOK(this.employee.empUsername)
      .subscribe(response => {
        console.log(response);
        this.validUsername = response;
      })

  }
}