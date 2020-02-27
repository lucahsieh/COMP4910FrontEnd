import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from 'src/app/shared/model/Employee';
import { MODE } from 'src/app/shared/model/MODE';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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


}


