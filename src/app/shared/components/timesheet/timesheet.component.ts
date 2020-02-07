import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetRow } from '../../model/TimesheetRow';
import { TimesheetStatus } from '../../model/TimesheetStatus.1';
import { Timesheet } from '../../model/Timesheet';

@Component({
  selector: 'shared-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  apiReady: boolean = false;
  validationError: boolean = false;

  timesheet: Timesheet;
  editable: boolean = false;

  projectDropdown: SelectItem[];
  wpDropdown: SelectItem[];

  constructor() { }

  ngOnInit() {
    // this.TimesheetService.getTimesheet .....  .then( ts => this.timesheet = ts);
    this.seedData();
    this.editable = false;
  }

  // TODO: replace this by sample api calls + define the json
  seedData() {
    this.projectDropdown = [
      { label: 'BigProject', value: 1 },
      { label: 'SmallProject', value: 2 },
      { label: 'GergProject', value: 3 }
    ];
    this.wpDropdown = [
      { label: 'Workpage Name', value: 1 },
      { label: 'Big work', value: 2 },
      { label: 'small work', value: 3 }
    ];
    this.timesheet = {
      "timesheetId": 1,
      "versionNumber": 1,
      "employeeId": 1,
      "weekNumber": 1,
      "weekEndingIn": new Date(),
      "status": TimesheetStatus.inProgress,
      "signature": null,
      "timesheetRows": [
        {
          "projectId": 1,
          "projectName": "project Name",
          "pwId": 1,
          "pwName": "string",
          "hours": [0, 1, 2, 3, 4, 5, 6]
        },
        {
          "projectId": 1,
          "projectName": "project Name",
          "pwId": 2,
          "pwName": "pw name",
          "hours": [0, 31, 2, 3, 4, 5, 6]
        }
      ]
    };
  }

  /** Validate hrs entered */
  validate(hr: number): boolean {
    if (hr < 0 || hr >= 24) {
      this.validationError = true;
      return true;
    }
    if (hr % 0.25 != 0) {
      this.validationError = true;
      return true;
    }
    return false;
  }
  rowTotal(d: any) {
    let sum: number = 0;
    d.hours.forEach(e => { sum += +e });
    return sum;
  }

  /** summing the week hours
   * @param colNumeber: week number (starting sat = 0)
   */
  colTotal(colNumber: number) {
    let sum: number = 0;
    this.timesheet.timesheetRows.forEach(e => sum += +e.hours[colNumber]);
    return sum;
  }
  timesheetTotal() {
    let sum: number = 0;
    this.timesheet.timesheetRows.forEach(e => e.hours.forEach(ee => sum += +ee))
    return sum;

  }

  /** exist edit field */
  onEditComplete(event) {
  }

  onEditInit(event) {
    console.log(event);
    event.column.editable = false;
  }

}
