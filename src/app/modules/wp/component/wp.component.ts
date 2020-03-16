import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WpService } from 'src/app/core/service/wp/wp.service';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { MODE } from 'src/app/shared/model/MODE';
import { Alert } from 'src/app/shared/model/Alert';

@Component({
  selector: 'app-wp',
  templateUrl: './wp.component.html',
  styleUrls: ['./wp.component.css']
})
export class WpComponent implements OnInit {

  @Input() wp: WorkPackage;
  @Input() mode: MODE;
  parentWPDropdown: SelectItem[] = null;
  engineerDropdown: SelectItem[] = null;
  workerDropdown: SelectItem[] = null;
  selectedParent: SelectItem;
  selectedEngineer: SelectItem;
  selectedWorkers: SelectItem[] = null;
  //validation
  @Input() validWPId: boolean;


  constructor(
    private wpService: WpService,
    private empService: EmployeeService,
  ) { }

  ngOnInit() {
    if (this.mode !== MODE.Read) this.populateEngineerDropdown();
    if (this.mode !== MODE.Read) this.populateParentDropdown();
    if (this.mode !== MODE.Read) this.populateWorkerDropdown();
  }

  populateEngineerDropdown() {
    this.empService
      .getEmployees()
      .subscribe(employees => {
        this.engineerDropdown = [];
        employees.forEach(e => {
          this.engineerDropdown.push(
            { label: `${e.empFirstName} ${e.empLastName}`, value: e.employeeId }
          )
        })
      })
  }

  populateParentDropdown() {

  }

  populateWorkerDropdown() {

  }
}
