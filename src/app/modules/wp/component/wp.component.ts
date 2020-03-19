import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WpService } from 'src/app/core/service/wp/wp.service';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { MODE } from 'src/app/shared/model/MODE';

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

  labourGrades: any[] = [];
  cols: any[];
  //validation
  @Input() validWpCode: boolean;
  @Input() alerts;


  constructor(
    private wpService: WpService,
    private empService: EmployeeService,
  ) { }

  ngOnInit() {
    if (this.mode !== MODE.Read) this.populateEngineerDropdown();
    if (this.mode !== MODE.Read) this.populateParentDropdown();
    if (this.mode !== MODE.Read) this.populateWorkerDropdown();
    this.initLabourGrades();
    this.initCols();
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
    this.wpService
      .getAllWpByProjectId()
      .subscribe(packages => {
        this.parentWPDropdown = [];
        console.log(this.parentWPDropdown);
        packages.forEach(p => {
          this.parentWPDropdown.push(
            {label: `${p.workPackageTitle}`, value: p.workPackageId}
          )
        })
      })
  }

  populateWorkerDropdown() {
    this.empService
      .getEmployees()
      .subscribe(employees => {
        this.workerDropdown = [];
        employees.forEach(e => {
          this.workerDropdown.push(
            { label: `${e.empFirstName} ${e.empLastName}`, value: e.employeeId }
          )
        })
    })
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  initLabourGrades() {
    this.empService
      .getLabourGrades()
      .subscribe(grades => {
        this.labourGrades = [];
        grades.forEach(g => {
          console.log(g);
          this.labourGrades.push(
            { label: `${g.labourGradeName}`, value: g.labourGradeId }
          );
        })
      })
  }

  initCols() {
    this.cols = [
      { field: 'rowName', header: '' },
      { field: '1', header: 'P1', value: '' },
      { field: '2', header: 'P2', value: '' },
      { field: '3', header: 'P3', value: '' },
      { field: '4', header: 'P4', value: '' },
      { field: '5', header: 'P5', value: '' },
      { field: '6', header: 'SS', value: '' },
      { field: '7', header: 'DD', value: '' },
    ]
  }
}
