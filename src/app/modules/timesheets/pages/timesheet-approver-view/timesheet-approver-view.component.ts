import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { ActivatedRoute } from '@angular/router';
import { MODE } from 'src/app/shared/model/MODE';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetStatus } from 'src/app/shared/model/TimesheetStatus';

@Component({
  selector: 'app-timesheet-approver-view',
  templateUrl: './timesheet-approver-view.component.html',
  styleUrls: ['./timesheet-approver-view.component.css']
})
export class TimesheetApproverViewComponent implements OnInit {

  timesheet: Timesheet;
  mode: MODE = MODE.Read;
  rapidPageValue: string = "323djo"

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
  onTextareaChange(e) {
    try {
      this.timesheet.comment = e.target.value;
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }
  colorStatus(status: string) {
    status = status.toLowerCase();
    switch (status) {
      case 'approved': return 'badge badge-pill badge-success';
      case 'rejected': return 'badge badge-pill badge-danger';
      case 'pending': return 'badge badge-pill badge-warning';
      case 'inprogress': return 'badge badge-pill badge-info';
      default: return 'badge badge-pill badge-dark';
    }
  }
  onReject() {
    this.timesheet.status = TimesheetStatus.rejected;
    this.timesheetService.putTimesheet(this.timesheet).subscribe(_ => console.log(this.timesheet));
  }
  onApprove() {
    this.timesheet.status = TimesheetStatus.approved;
    this.timesheetService.putTimesheet(this.timesheet).subscribe(_ => console.log(this.timesheet));
  }

}
