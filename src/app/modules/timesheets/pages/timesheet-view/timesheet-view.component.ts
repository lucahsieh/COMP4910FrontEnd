import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { MODE } from 'src/app/shared/model/MODE';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.css']
})
export class TimesheetViewComponent implements OnInit {

  timesheet: Timesheet;
  mode: MODE = MODE.Read;

  constructor(
    private route: ActivatedRoute,
    private timesheetService: TimesheetService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('timesheetId');
      console.log(`current timesheet id is  ${id}`);
      this.timesheetService.getTimesheet(id).subscribe(ts => { 
        this.timesheet = ts; 
        this.fixSpace(this.timesheet);
        console.log(JSON.stringify(ts)) 
      });
    });

  }

  colorStatus(status: string) {
    switch (status) {
      case 'Approved': return 'badge badge-pill badge-success';
      case 'Rejected': return 'badge badge-pill badge-danger';
      case 'Pending': return 'badge badge-pill badge-warning';
      case 'In Progress': return 'badge badge-pill badge-info';
      default: return 'badge badge-pill badge-dark';
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
