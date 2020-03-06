import { Component, OnInit, Input } from '@angular/core';
import { ProjectReport } from 'src/app/shared/model/ProjectReport';

@Component({
  selector: 'app-project-report-pm-view',
  templateUrl: './project-report-pm-view.component.html',
  styleUrls: ['./project-report-pm-view.component.css']
})
export class ProjectReportPmViewComponent implements OnInit {

  cols: any[];
  @Input() projectReport: ProjectReport;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'vin', header: 'Vin' }
    ]
  }

}
