import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetRow } from 'src/app/shared/model/TimesheetRow';
import { TimesheetStatus } from 'src/app/shared/model/TimesheetStatus';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { User } from 'src/app/shared/model/user';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-timesheet-creation',
  templateUrl: './timesheet-creation.component.html',
  styleUrls: ['./timesheet-creation.component.css']
})
export class TimesheetCreationComponent implements OnInit {

  ok = false;

  editable: boolean = true;
  timesheet: Timesheet = null;
  projectDropdown: SelectItem[] = null;
  wpDropdown: SelectItem[] = null;

  currentUser: User = this.authenticationService.currentUserValue;

  constructor(
    private timesheetService: TimesheetService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
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
    this.timesheetService
      .getAvaliableTimesheetId()
      .subscribe(result => {
        var newTimesheet = new Timesheet();
        var weekending = new Date();
        var shit: number = 5 - weekending.getDay();
        weekending.setDate(weekending.getDate() + shit);
        newTimesheet.weekEnding = this.dateFormater(weekending);
        newTimesheet.weekNumber = this.getWeek(weekending);

        console.log(result);
        // init attirbutes
        newTimesheet.timesheetId = result.id;
        newTimesheet.employeeId = this.currentUser.employeeId;
        newTimesheet.versionNumber = 1;
        newTimesheet.status = TimesheetStatus.inProgress;

        // Create 5 empty rows at page load.
        for (var i = 0; i < 5; i++)
          newTimesheet.timesheetRows.push(new TimesheetRow(newTimesheet.timesheetId, newTimesheet.versionNumber, 0, 0));

        this.timesheet = newTimesheet;

        this.ok = true;
      })

  }

  populateWPDropdown() {

  }
  populateProjectDropdown() {

  }

  dataReady() {
    if (this.timesheet !== null
      // && this.projectDropdown !== null && this.wpDropdown !== null
    )
      return true;
    return false;
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
