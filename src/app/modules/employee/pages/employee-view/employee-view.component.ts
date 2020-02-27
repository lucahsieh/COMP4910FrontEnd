import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Employee } from 'src/app/shared/model/Employee';
import { MODE } from 'src/app/shared/model/MODE';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {


  employee: Employee;
  mode = MODE.Read;
  alerts = {};

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.employeeService.getEmployee(id).subscribe(e => this.employee = e);
    });

  }



}
