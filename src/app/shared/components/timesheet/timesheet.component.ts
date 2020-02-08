import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
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

  dataReady: boolean = false;
  editable: boolean = false;

  projectDropdown: SelectItem[];
  wpDropdown: SelectItem[];


  constructor() { }

  ngOnInit() {
    // this.TimesheetService.getTimesheet .....  .then( ts => this.timesheet = ts);
    this.seedData();
    // this.weekEnding = this.timesheet.weekEnding;

    this.dataReady = true;
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
      "weekEnding": '2020-02-11',
      "status": TimesheetStatus.inProgress,
      "signature": null,
      "timesheetRows": [
        {
          "projectId": 2,
          "projectName": "project Name",
          "pwId": 4,
          "pwName": "string",
          "monday": 1,
          "tuesday": 1,
          "wednesday": 1,
          "thursday": 1,
          "friday": 1,
          "saturday": 1,
          "sunday": 1,
        },
        {
          "projectId": 1,
          "projectName": "project Name",
          "pwId": 3,
          "pwName": "pw name",
          "monday": 1,
          "tuesday": 1,
          "wednesday": 1,
          "thursday": 1,
          "friday": 1,
          "saturday": 1,
          "sunday": 1,
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
    sum += +d.sunday;
    sum += +d.monday;
    sum += +d.tuesday;
    sum += +d.wednesday;
    sum += +d.thursday;
    sum += +d.friday;
    sum += +d.saturday;
    return sum;
  }

  /** summing the week hours
   * @param colNumeber: week number (starting sat = 0)
   */
  colTotal(day: string) {
    let sum: number = 0;
    this.timesheet.timesheetRows.forEach(e => {

      switch (day) {
        case "sunday": {
          sum += +e.sunday;
          break;
        }
        case "monday": {
          sum += +e.monday;
          break;
        }
        case "tuesday": {
          sum += +e.tuesday;
          break;
        }
        case "wednesday": {
          sum += +e.wednesday;
          break;
        }
        case "thursday": {
          sum += +e.thursday;
          break;
        }
        case "friday": {
          sum += +e.friday;
          break;
        }
        case "saturday": {
          sum += +e.saturday;
          break;
        }
        default: {
          //statements; 
          break;
        }
      }

    });
    return sum;
  }
  timesheetTotal() {
    let sum: number = 0;
    this.timesheet.timesheetRows.forEach(e => {
      sum += +e.sunday;
      sum += +e.monday;
      sum += +e.tuesday;
      sum += +e.wednesday;
      sum += +e.thursday;
      sum += +e.friday;
      sum += +e.saturday;
    })
    return sum;

  }

  /** exist edit field */
  onEditComplete(event) {
  }

  onEditInit(event) {
    console.log(event);
    event.column.editable = false;
  }

  addRow(event) {
    // TODO: replace the pushed item as empty item
    this.timesheet.timesheetRows.push(
      {
        "projectId": Math.floor(Math.random() * Math.floor(100)),
        "projectName": "",
        "pwId": Math.floor(Math.random() * Math.floor(100)),
        "pwName": "",
        "monday": 0,
        "tuesday": 0,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0,
      }
    );
  }

  deleteRow(p) {
    console.log(p);
    var temp = this.timesheet.timesheetRows
    this.timesheet.timesheetRows = temp.filter(r => {
      if (r.pwId != p.pwId && r.projectId != p.pwId)
        return r;
    })
  }

  dateFormater(d: Date) {
    var yyyy = d.getFullYear();
    var MM = d.getMonth() + 1;
    var dd = d.getDate();
    return `${yyyy}-${MM}-${dd}`;
  }

  /**
   * 
   * @param s with format "2020-10-11"
   */
  stringToDate(s: string) {
    var date = new Date(s);
    console.log(date);
    return date;
  }
  getWeek(date: Date) {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  onValueChange(value: Date): void {
    console.log(value);
    this.timesheet.weekEnding = this.dateFormater(value);
    this.timesheet.weekNumber = this.getWeek(value);
  }

}
