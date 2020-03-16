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

}
