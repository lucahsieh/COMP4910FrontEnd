import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {

  timesheets: Timesheet[] = null;
  cols: any[];


  constructor(
    private timesheetService: TimesheetService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'weekNumber', header: 'Week' },
      { field: 'versionNumber', header: 'Version' },
      { field: 'weekEndingIn', header: 'Week Ending' },
      { field: 'status', header: 'Status' }
    ];
    this.populateTimesheets();
  }

  populateTimesheets() {
    var userId = this.authenticationService.currentUserValue.employeeId;
    this.timesheetService.getAllTimesheet(userId).subscribe(res => {
      this.timesheets = res;
      this.timesheets.forEach(this.fixSpace);
      console.log(this.timesheets)
    });
  }

  dataReady() {
    if (this.timesheets !== null)
      return true;
    return false;
  }
  colorStatus(status: string) {
    switch (status) {
      case 'Approved': return 'badge badge-success';
      case 'Rejected': return 'badge badge-danger';
      case 'Pending': return 'badge badge-warning';
      case 'In Progress': return 'badge badge-info';
    }

  }
  //Fixes Spacing of the term "In Progress" for display
  //Can also have backend return status "In Progress" with a space as alternative to this
  fixSpace(ts: Timesheet) {
    if(ts.status == "InProgress") {
      ts.status = ts.status.substr(0,2) + ' ' + ts.status.substr(2);
    }
  }
}
