import { Component, OnInit } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WPReport } from 'src/app/shared/model/WPReport';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-wp-report-view',
  templateUrl: './wp-report-view.component.html',
  styleUrls: ['./wp-report-view.component.css']
})
export class WpReportViewComponent implements OnInit {

  mode: MODE = MODE.Read;
  wpr: WPReport = null;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var wpReportId = params.get('wpReportId');
      this.reportService.getWpReport(wpReportId).subscribe(r => this.wpr = r);
    });
  }

}
