import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Employee } from 'src/app/shared/model/Employee';
import { SelectItem } from 'primeng/api/selectitem';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MyToastService } from 'src/app/core/service/my-toast.service';

@Component({
  selector: 'app-employee-change-approver',
  templateUrl: './employee-change-approver.component.html',
  styleUrls: ['./employee-change-approver.component.css']
})
export class EmployeeChangeApproverComponent implements OnInit {


  displayEmployee: any[] = [];
  selectedEmp: Employee = null;
  cols: any[];
  employeeDropdown: SelectItem[] = null;
  modalRef: BsModalRef;

  constructor(
    private employeeService: EmployeeService,
    private modalService: BsModalService,
    private myToastService: MyToastService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.initEmployees();
    this.initCols();
    this.populateEmployeeDropdown();
  }

  initEmployees() {
    this.employeeService.getAllChildrenEmployees(this.authService.currentUserValue.employeeId).subscribe(res => {
      console.log(res);
      res.forEach(i => {
        console.log(i)
        this.displayEmployee.push(
          {
            "employeeId": i.employeeId,
            "empCode": i.empCode,
            "empName": `${i.empFirstName} ${i.empLastName}`,
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
      { field: 'approverName', header: 'Approver' },
      { field: 'activation', header: 'Activation' },
      { field: 'button', header: '' },
    ]
  }

  populateEmployeeDropdown() {
    this.employeeService
      .getEmployees()
      .subscribe(employees => {
        this.employeeDropdown = [];
        // this.employeeDropdown.push({ label: `-----`, value: null });
        employees.forEach(e => {
          this.employeeDropdown.push(
            { label: `${e.empFirstName} ${e.empLastName}`, value: e }
          );
        })
        console.log(this.employeeDropdown);
      })
  }

  openModal(id, template: TemplateRef<any>) {
    console.log(id)
    this.employeeService.getEmployee(id).subscribe(emp => {
      this.selectedEmp = emp;
      this.modalRef = this.modalService.show(template);
    })
  }

  onSaveChange() {
    this.employeeService.putEmployee(this.selectedEmp).subscribe(_ => {
      this.modalRef.hide();
      this.myToastService.addSuccess('Successfully changed Timesheet Approver', `${new Date().toLocaleString()}`);
    })
  }


}
