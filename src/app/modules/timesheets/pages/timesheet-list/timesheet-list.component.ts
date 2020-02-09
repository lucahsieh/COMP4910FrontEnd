import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';

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
    this.timesheetService.getAllTimesheet().subscribe(res => { this.timesheets = res; console.log(res) });
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
      case 'Inprogress': return 'badge badge-info';
    }

  }
}
