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
      { field: 'weekEndingIn', header: 'week Ending' },
      { field: 'status', header: 'Status' }
    ];
    this.populateTimesheets();
  }

  populateTimesheets() {
    var userId = this.authenticationService.currentUserValue.employeeId;
    this.timesheetService.getAllTimesheet(userId).subscribe(res => {
      this.timesheets = res;
      this.timesheets.forEach(ts => ts.status = ts.status.toLowerCase());
      console.log(this.timesheets)
    });
  }

  dataReady() {
    if (this.timesheets !== null)
      return true;
    return false;
  }
  colorStatus(status: string) {
    switch (status.toLowerCase()) {
      case 'approved': return 'badge badge-success';
      case 'rejected': return 'badge badge-danger';
      case 'pending': return 'badge badge-warning';
      case 'inprogress': return 'badge badge-info';
    }

  }
}
