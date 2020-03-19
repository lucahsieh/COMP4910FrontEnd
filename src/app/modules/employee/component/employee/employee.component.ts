import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { MODE } from 'src/app/shared/model/MODE';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() mode: MODE;
  greadeDropdown: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  selectedGrade: SelectItem;
  selectedSupervisor: SelectItem;
  selectedApprover: SelectItem;
  // userName validation
  @Input() validUsername: boolean;
  @Input() validEmployeeCode: boolean;
  @Input() alerts;
  @Output() restPw: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeUsername: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeEmpCode: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    if (this.mode !== MODE.Read) this.populateEmployeeDropdown();
    if (this.mode !== MODE.Read) this.populateLabourGradeDropdown();

  }
  populateLabourGradeDropdown() {
    this.employeeService
      .getLabourGrades()
      .subscribe(greades => {
        this.greadeDropdown = [];
        console.log(greades);
        greades.forEach(g => {
          console.log(g);
          this.greadeDropdown.push(
            { label: `${g.labourGradeName}`, value: g.labourGradeId }
          );
        })
        console.log(this.greadeDropdown);
      })
  }

  populateEmployeeDropdown() {
    this.employeeService
      .getEmployees()
      .subscribe(employees => {
        this.employeeDropdown = [];
        console.log(employees);
        employees.forEach(e => {
          console.log(e);
          this.employeeDropdown.push(
            { label: `${e.empFirstName} ${e.empLastName}`, value: e.employeeId }
          );
        })
        console.log(this.employeeDropdown);
      })
  }

  // exit event of emp id field
  onExitEmployeeId() {
    this.changeEmpCode.emit('payload');
  }

  // exit event of user name
  onExitUserName() {
    this.changeUsername.emit('payload');
  }

  // click reset password btn
  onRestPw() {
    this.restPw.emit('payload');
  }

}
