import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Timesheet } from 'src/app/shared/model/Timesheet';

@Component({
  selector: 'app-timesheet-approver-view-list',
  templateUrl: './timesheet-approver-view-list.component.html',
  styleUrls: ['./timesheet-approver-view-list.component.css']
})
export class TimesheetApproverViewListComponent implements OnInit {

  displayTimesheet: any[] = [];
  cols: any[];

  constructor(
    private timesheetService: TimesheetService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'empName', header: 'Employee' },
      { field: 'supervisor', header: 'Supervisor' },
      { field: 'approver', header: 'Approver' },
      { field: 'weekNumber', header: 'Week' },
      { field: 'versionNumber', header: 'Version' },
      { field: 'weekEndingIn', header: 'Week Ending' },
      { field: 'status', header: 'Status' }
    ];
    this.populateTimesheets();
  }

  populateTimesheets() {
    var userId = this.authenticationService.currentUserValue.employeeId;
    this.timesheetService.getPendingTimesheets(userId)
      .subscribe(res => {
        res.forEach(ts => {
          this.displayTimesheet.push(
            {
              'empName': `${ts.owner.empFirstName} ${ts.owner.empLastName}`,
              'approver': `${ts.owner.timesheetApprover.empFirstName} ${ts.owner.timesheetApprover.empLastName}`,
              'supervisor': `${ts.owner.supervisor.empFirstName} ${ts.owner.supervisor.empLastName}`,
              'weekNumber': ts.weekNumber,
              'versionNumber': ts.versionNumber,
              'weekEndingIn': this.toDate(ts.weekEndingIn),
              'status': ts.status,
              'timesheetId': ts.timesheetId
            })
        })
        console.log(this.displayTimesheet)
      });
  }

  colorStatus(status: string) {
    switch (status.toLowerCase()) {
      case 'approved': return 'badge badge-success';
      case 'rejected': return 'badge badge-danger';
      case 'pending': return 'badge badge-warning';
      case 'inprogress': return 'badge badge-info';
    }
  }

  toDate(str: string) {
    let date = new Date(str);
    return date.toLocaleDateString();
  }

}
