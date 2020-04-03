import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Timesheet } from '../../model/Timesheet';
import { TimesheetRow } from '../../model/TimesheetRow';
import { MODE } from '../../model/MODE';
import * as uuid from 'uuid';

@Component({
  selector: 'shared-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  apiReady: boolean = false;
  validationError: any[] = [];
  dataReady: boolean = false;

  @Input() mode: MODE;
  @Input() timesheet: Timesheet;
  // @Input() projectDropdown: SelectItem[];
  // @Input() employeeWPs: any[];

  @Input() projectWp: any[];

  days: any[];

  constructor() { }

  ngOnInit() {
    this.dataReady = true;
    this.days = [
      { header: 'Sat', value: 'saturday' },
      { header: 'Sun', value: 'sunday' },
      { header: 'Mon', value: 'monday' },
      { header: 'Tue', value: 'tuesday' },
      { header: 'Wed', value: 'wednesday' },
      { header: 'Thu', value: 'thursday' },
      { header: 'Fri', value: 'friday' }
    ]
  }

  /** Validate hrs entered */
  /** false means passed */
  invalidHr(hr: number): boolean {
    var result = false;
    if (hr < 0 || hr >= 24) {
      this.validationError['hr'] = { msgs: 'Hour should be between 0 and 24', type: 'danger' };
      result = true;
    }
    // if (hr % 0.25 != 0 ) {
    //   this.validationError['hr'] = { msgs: 'Hour should in 0.25 unit', type: 'danger' };
    // }
    return result;
  }
  rowTotal(d: any) {
    let sum: number = 0;
    this.days.forEach(day => {
      if (d[day.value] === null) {
        d[day.value] = 0;
      }
      sum += +d[day.value];
    })
    return sum;
  }

  /** summing the week hours
   * @param colNumeber: week number (starting sat = 0)
   */
  colTotal(day: string) {
    let sum: number = 0;
    this.timesheet.timesheetRows.forEach(e => sum += +e[day]);
    return sum;
  }
  timesheetTotal() {
    let sum: number = 0;
    this.timesheet.timesheetRows.forEach(e => {
      this.days.forEach(day => sum += +e[day.value]);
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
      new TimesheetRow(this.timesheet.timesheetId, this.timesheet.versionNumber, 0, 0)
    );
  }

  deleteRow(p, index) {
    // console.log(p);
    // var temp = this.timesheet.timesheetRows
    // this.timesheet.timesheetRows = temp.filter(r => {
    //   if (r.workPackageId != p.workPackageId && r.projectId != p.projectId)
    //     return r;
    // })
    console.log(index)
    if (this.timesheet.timesheetRows.length > index) {
      this.timesheet.timesheetRows.splice(index, 1);
    }
  }

  populateProject() {
    let projects = [{ 'label': '---', 'value': 0 }];
    if (!this.projectWp)
      return projects;
    this.projectWp.forEach(i => {
      var item = { 'label': i.projectName, 'value': i.projectId };
      if (projects.filter(p => { return p.value == item.value; }).length === 0) projects.push(item);
    })
    return projects;
  }

  populateWps(projectId) {
    let wps = [{ 'label': '---', 'value': 0, 'projectId': 0 }];
    if (!this.projectWp)
      return wps;
    if (projectId == null || projectId == 0)
      return wps;
    this.projectWp.forEach(i => {
      var item = { 'label': i.wpCode, 'value': i.wpId, 'projectId': i.projectId };
      if (item.projectId == projectId) wps.push(item);
    })
    return wps;
  }


  getWeek(date: Date): number {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
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

  // onChangeInputDays(e){
  //   this.timesheet.timesheetRows.forEach(row=>{
  //     this.days.forEach(day=>{
  //       row
  //     })
  //   })
  // }


  onValueChange(value: Date): void {
    console.log(value);
    this.timesheet.weekEndingIn = this.dateFormater(value);
    this.timesheet.weekNumber = this.getWeek(value);
  }

  // getOvertime() {
  //   var total = this.timesheetTotal();
  //   if (total - 40 > 0)
  //     return total - 40;
  //   return 0;
  // }

  /** return true if pass */
  validatePage(): boolean {
    this.validationError = [];
    if (this.timesheet.weekEndingIn === null) {
      this.validationError['weekEndingIn'] = { msgs: 'Timesheet week cannot be empty', type: 'danger' };
    }
    // when timesheet over 40 hours
    let totalhrs = this.timesheetTotal()
    if (totalhrs > 40) {
      let flex = this.timesheet.flexTime
      let overtime = this.timesheet.overTime
      if ((totalhrs - flex - overtime - 40) > 0) {
        this.validationError['flexTime'] = { msgs: 'You must allocate hours into flex or overtime', type: 'danger' };
      } else if ((totalhrs - flex - overtime - 40) < 0) {
        this.validationError['flexTime'] = { msgs: 'You allocated TOO MANY hours into flex or overtime', type: 'danger' };
      }
    }
    // not timesheet rows
    if (this.timesheet.timesheetRows.length == 0) {
      this.validationError['row'] = { msgs: 'You must have at least one timesheet row', type: 'danger' };
      return Object.keys(this.validationError).length == 0;
    }

    // row validation
    this.timesheet.timesheetRows.forEach(row => {
      if (row.projectId == 0) {
        this.validationError['projectId'] = { msgs: 'You must select a project', type: 'danger' };
      }
      if (row.workPackageId == 0) {
        this.validationError['workPackageId'] = { msgs: 'You must select a work package', type: 'danger' };
      }
      this.days.forEach(day => {
        this.invalidHr(row[day]);
      });
    });

    // col validation
    this.days.forEach(day => {
      var colTotal: number = 0;
      this.timesheet.timesheetRows.forEach(row => {
        colTotal += + row[day.value];
      })
      if (colTotal > 24) {
        this.validationError['over24'] = { msgs: `The total hours on ${day.value} is over 24`, type: 'danger' };
      }
    })


    console.log(this.validationError)
    return Object.keys(this.validationError).length == 0;
  }

  dispalyError() {
    return Object.keys(this.validationError).length != 0;
  }

}
