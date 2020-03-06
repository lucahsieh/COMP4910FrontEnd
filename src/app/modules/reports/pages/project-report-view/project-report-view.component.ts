import { Component, OnInit } from '@angular/core';
import { ProjectReport, WpStatus } from 'src/app/shared/model/ProjectReport';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-project-report-view',
  templateUrl: './project-report-view.component.html',
  styleUrls: ['./project-report-view.component.css']
})
export class ProjectReportViewComponent implements OnInit {

  projectReport: ProjectReport;
  cols: any[];
  pmViewCols: any[];
  reViewCols: any[];
  data: WpStatus[];

  constructor(
    private ReportService: ReportService,
  ) { }

  ngOnInit() {
    this.ReportService.getProjectReport('ew').subscribe(r => {
      this.projectReport = r;
      console.log(this.projectReport);
    });
    this.cols = [
      { field: 'workPackageCode', header: 'Code' },
      { field: 'workPackageName', header: 'Name' },
      { field: 'wpReBudget', header: 'RE Budget' },
      { field: 'wpActualSepnds', header: 'ACWP' },
      { field: 'wpReEAC', header: 'EAC' },
      { field: 'wpPmEAC', header: 'EAC' },
      { field: 'wpReVariance', header: 'Variance' },
      { field: 'wpPmVariance', header: 'Variance' },
      { field: 'wpReCompletion', header: 'Completion' },
      { field: 'wpPmCompletion', header: 'Completion' },
      { field: 'isClosed', header: 'Status' },
      { field: 'engineersInitials', header: 'Members' }
    ];
    this.pmViewCols = [
      { field: 'workPackageCode', header: 'Code' },
      { field: 'workPackageName', header: 'Name' },
      { field: 'wpReBudget', header: 'RE Budget' },
      { field: 'wpActualSepnds', header: 'ACWP' },
      { field: 'wpPmEAC', header: 'EAC' },
      { field: 'wpPmVariance', header: 'Variance' },
      { field: 'wpPmCompletion', header: 'Completion' },
      { field: 'isClosed', header: 'Status' },
      { field: 'engineersInitials', header: 'Members' },
    ];
    this.reViewCols = [
      { field: 'workPackageCode', header: 'Code' },
      { field: 'workPackageName', header: 'Name' },
      { field: 'wpReBudget', header: 'RE Budget' },
      { field: 'wpActualSepnds', header: 'ACWP' },
      { field: 'wpReEAC', header: 'EAC' },
      { field: 'wpReVariance', header: 'Variance' },
      { field: 'wpReCompletion', header: 'Completion' },
      { field: 'isClosed', header: 'Status' },
      { field: 'engineersInitials', header: 'Members' }
    ]
  }

}
