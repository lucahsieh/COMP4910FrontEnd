import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayEmployee: any[] = [];
  cols: any[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.initEmployees();
    this.initCols();
  }

  initEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      console.log(res);
      res.forEach(i => {
        console.log(i)
        this.displayEmployee.push(
          {
            "employeeId": i.employeeId,
            "empCode": i.empCode,
            "empName": `${i.empFirstName} ${i.empLastName}`,
            "empUsername": i.empUsername,
            'supervisorName': `${i.supervisor.empFirstName} ${i.supervisor.empLastName}`,
            'approverName': `${i.timesheetApprover.empFirstName} ${i.timesheetApprover.empLastName}`,
            'activation': i.isActivated,
          }
        );
      })
      console.log(this.displayEmployee)
    });
  }
  initCols() {
    this.cols = [
      { field: 'empCode', header: 'Employee ID' },
      { field: 'empName', header: 'Employee Name' },
      { field: 'empUsername', header: 'User Name' },
      { field: 'supervisorName', header: 'Supervisor' },
      { field: 'approverName', header: 'Approver' },
      { field: 'activation', header: 'Activation' },
      { field: 'button', header: '' },
    ]
  }

}
