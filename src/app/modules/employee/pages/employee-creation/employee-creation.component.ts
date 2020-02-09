import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Employee } from 'src/app/shared/model/employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';

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
  alerts: any[] = [];

  constructor(
    private employeeService: EmployeeService,
  ) {
    this.grade = [
      { "label": 'P1', "value": 1 },
      { "label": 'P2', "value": 2 },
      { "label": 'P3', "value": 3 },
      { "label": 'P4', "value": 4 },
    ];
  }

  ngOnInit() {
    this.employee = new Employee();
    this.employee.isActivated = true;
    this.employee.empPassword = "01234";
    this.populateEmployeeDropdown();
  }

  onExitUserName() {
    console.log(this.employee.empUsername);
    this.employeeService.checkUserNameOK(this.employee.empUsername)
      .subscribe(response => {
        console.log(response.status);
        this.validUsername = (response.status === 200);
      })
  }

  onExitEmployeeId() {
    this.employeeService.checkUserEmployeeCodeOK(this.employee.empCode)
      .subscribe(response => {
        console.log(response.status);
        this.validEmployeeCode = (response.status === 200);
      })
  }
  populateEmployeeDropdown() {
    this.employeeDropdown = [];
    this.employeeService
      .getEmployees()
      .subscribe(employees => {
        console.log(employees);
        employees.forEach(e => {
          console.log(e);
          this.employeeDropdown.push(
            { "label": `${e.empFirstName} ${e.empLastName}`, "value": e.employeeId }
          );
        })
        console.log(this.employeeDropdown);
      })
  }

  onCreate(template: TemplateRef<any>) {
    if (!this.validatePage())
      return;
    console.log("POST employee");
    console.log(JSON.stringify(this.employee));
    this.employeeService.postEmployee(this.employee).subscribe();
  }
  onCancel() {

  }

  validatePage(): boolean {
    if (!this.validUsername) {
      this.alerts.push({
        type: 'danger',
        msg: `User Name: ${this.employee.empUsername} is not allowed`
      });
      return false;
    }
    if (!this.validEmployeeCode) {
      this.alerts.push({
        type: 'danger',
        msg: `Employee ID : ${this.employee.empCode} is not allowed`
      });
      return false;
    }
    return true;
  }


  dataReady() {
    if (this.grade !== null && this.employeeDropdown !== null)
      return true;
    return false;
  }

}
