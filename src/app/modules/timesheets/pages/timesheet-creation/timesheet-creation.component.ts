import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetRow } from 'src/app/shared/model/TimesheetRow';
import { TimesheetStatus } from 'src/app/shared/model/TimesheetStatus';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { User } from 'src/app/shared/model/user';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

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

  currentUser: User = this.authenticationService.currentUserValue;

  constructor(
    private timesheetService: TimesheetService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.timesheet = new Timesheet();
    this.setEmptyTimesheetData();
    // this.seedData();
  }

  onSubmit() {
    this.timesheet.status = TimesheetStatus.pending;
    this.timesheetService.postTimesheet(this.timesheet).subscribe();
  }
  onSave() {
    console.log(`post timesheet:`);
    console.log(JSON.stringify(this.timesheet));
    this.timesheetService.postTimesheet(this.timesheet).subscribe(

    );
  }


  setEmptyTimesheetData() {
    // set default week number as current week.
    var newTimesheet = new Timesheet();
    var weekending = new Date();
    var shit: number = 5 - weekending.getDay();
    weekending.setDate(weekending.getDate() + shit);
    newTimesheet.weekEnding = this.dateFormater(weekending);
    newTimesheet.weekNumber = this.getWeek(weekending);

    // init attirbutes
    newTimesheet.employeeId = this.currentUser.employeeId;
    newTimesheet.versionNumber = 1;
    newTimesheet.status = TimesheetStatus.inProgress;

    // Create 5 empty rows at page load.
    for (var i = 0; i < 5; i++)
      newTimesheet.timesheetRows.push(new TimesheetRow());

    this.timesheet = newTimesheet;
  }

  populateWPDropdown() {

  }
  populateProjectDropdown() {

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
    var MM = ("00" + (d.getMonth() + 1)).slice(-2);
    var dd = ("00" + (d.getDate() + 1)).slice(-2);
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
