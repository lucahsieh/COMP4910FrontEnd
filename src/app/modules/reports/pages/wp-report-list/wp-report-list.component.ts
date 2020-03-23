import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-wp-report-list',
  templateUrl: './wp-report-list.component.html',
  styleUrls: ['./wp-report-list.component.css']
})
export class WpReportListComponent implements OnInit {

  @Input() wpCode: any = 32; //MUST HAVE
  @Output() goReportPage: EventEmitter<string> = new EventEmitter<string>();

  displayReports: any[] = [];
  cols: any[];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'endDate', header: 'Week Number' },
      { field: 'reportDate', header: 'Report Date' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'End Date' },
    ];
    this.populateReports();
  }

  onWpReportClick(reportId) {
    this.goReportPage.emit(`${reportId}`);
  }

  populateReports() {
    this.reportService.getAllWpReports(this.wpCode)
      .subscribe(res => {
        res.forEach(r => {
          this.displayReports.push(
            {
              'reportDate': new Date(r.reportDate),
              'startDate': new Date(r.startDate),
              'endDate': new Date(r.endDate),
              'workPackageReportId': r.workPackageReportId
            }
          );
        })
      })
  }

}
