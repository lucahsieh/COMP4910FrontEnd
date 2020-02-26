import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetStatus } from 'src/app/shared/model/TimesheetStatus';
import { TimesheetRow } from 'src/app/shared/model/TimesheetRow';
import { User } from 'src/app/shared/model/User';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { MODE } from 'src/app/shared/model/MODE';

@Component({
  selector: 'app-timesheet-edit',
  templateUrl: './timesheet-edit.component.html',
  styleUrls: ['./timesheet-edit.component.css']
})
export class TimesheetEditComponent implements OnInit {

  dataReady = false;
  mode: MODE = MODE.Update;
  timesheet: Timesheet = null;
  projectDropdown: SelectItem[] = null;
  employeeWPs: any[] = null;

  currentUser: User = this.authenticationService.currentUserValue;

  constructor(
    private timesheetService: TimesheetService,
    private projectService: ProjectService,
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
        this.dataReady = true;
      })

  }

  populateProjectDropdown() {
    this.projectService.getProjectsByEmployee(this.currentUser.employeeId).subscribe(result => {
      this.employeeWPs = [];
      this.projectDropdown = [];
      result.projectList.foreach(p => {
        var projectId = p.projectId;
        var projectName = p.projectName;
        this.projectDropdown.push({ label: projectName, value: projectId });
        p.workPackages.foreach(wp => {
          var wpId = p.workPackageId;
          var wpCode = p.workPackageCode;
          this.employeeWPs.push(
            { projectId: projectId, projectName: projectName, wpId: wpId, wpCode: wpCode }
          )
        })
      })
    })
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