import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetRow } from 'src/app/shared/model/TimesheetRow';

@Component({
  selector: 'app-timesheet-creation',
  templateUrl: './timesheet-creation.component.html',
  styleUrls: ['./timesheet-creation.component.css']
})
export class TimesheetCreationComponent implements OnInit {

  editable: boolean = true;
  timesheet: Timesheet;
  projectDropdown: SelectItem[];
  wpDropdown: SelectItem[];

  constructor() { }

  ngOnInit() {
    this.timesheet = new Timesheet();
    this.setEmptyTimesheetData();
    // this.seedData();
  }

  onSumbit() {

  }
  onSave() {

  }


  setEmptyTimesheetData() {
    var newTimesheet = new Timesheet();
    var weekending = new Date();
    var shit: number = 5 - weekending.getDay();
    weekending.setDate(weekending.getDate() + shit);
    newTimesheet.weekEnding = this.dateFormater(weekending);
    newTimesheet.weekNumber = this.getWeek(weekending);

    for (var i = 0; i < 5; i++)
      newTimesheet.timesheetRows.push(new TimesheetRow());

    this.timesheet = newTimesheet;
  }




  // helper functions
  getWeek(date: Date) {
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
}
