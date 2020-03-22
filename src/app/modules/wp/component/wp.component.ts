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

  @Input() projectId: any = 0; //must have an input for populating workers and wps

  @Input() wp: WorkPackage;
  @Input() mode: MODE;
  @Input() employees: any[] = [];
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
  @Output() changeWpCode: EventEmitter<string> = new EventEmitter<string>();


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
      .getEmployeesWithinProject(this.projectId)
      .subscribe(employees => {
        this.engineerDropdown = [];
        employees.forEach(e => {
          this.engineerDropdown.push(
            {
              label: `${e.empFirstName} ${e.empLastName}`, value:
              {
                "employeeId": e.employeeId,
                "empFirstName": e.empFirstName,
                "empLastName": e.empLastName
              }
            }
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
            { label: `${p.workPackageTitle}`, value: p.workPackageCode }
          )
        })
      })
  }

  populateWorkerDropdown() {
    this.empService
      .getEmployeesWithinProject(this.projectId)
      .subscribe(employees => {
        this.workerDropdown = [];
        employees.forEach(e => {
          this.workerDropdown.push(
            {
              label: `${e.empFirstName} ${e.empLastName}`, value:
              {
                "employeeId": e.employeeId,
                "empFirstName": e.empFirstName,
                "empLastName": e.empLastName
              }
            }
          )
        })
      })
  }

  // teamMemberSelect() {
  //   var savedItems = [];
  //   if (this.wp.workers.length > 0) {
  //     savedItems = this.wp.workers;
  //   }
  //   var temp = [];
  //   for (var i = 0; i < this.employees.length; i++) {
  //     var label = this.employees[i].label.split(" ");
  //     var efn = label[0];
  //     var eln = label[1];
  //     var eid = this.employees[i].value;

  //     var tempJson = {
  //       "empFirstName": efn,
  //       "empLastName": eln,
  //       "employeeId": eid
  //     };
  //     temp.push(tempJson);
  //   }
  //   this.wp.workers = temp;
  // }

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
      { field: 'labourGradeName', header: 'Labour Grade' },
      { field: 'pmEAC', header: 'Project Manager EAC' },
      { field: 'reBudget', header: 'Responsible Engineer Budget' }
    ]
  }

  onChangeWpCode() {
    this.changeWpCode.emit('payload');
  }

  onChangeParentWp() {
    console.log('changed parent wp');
  }

  /** exist edit field */
  onEditComplete(event) {
  }

}
