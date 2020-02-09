import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.css']
})
export class TimesheetViewComponent implements OnInit {

  timesheet: Timesheet;

  constructor(
    private route: ActivatedRoute,
    private timesheetService: TimesheetService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('timesheetId');
      console.log(`current timesheet id is  ${id}`);
      this.timesheetService.getTimesheet(id).subscribe(ts => this.timesheet = ts);
    });

  }

  colorStatus(status: string) {
    switch (status) {
      case 'Approved': return 'badge badge-pill badge-success';
      case 'Rejected': return 'badge badge-pill badge-danger';
      case 'Pending': return 'badge badge-pill badge-warning';
      case 'Inprogress': return 'badge badge-pill badge-info';
      default: return 'badge badge-pill badge-dark';
    }
  }
}
