import { Component, OnInit } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WPReport } from 'src/app/shared/model/WPReport';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {



  constructor(

  ) { }

  ngOnInit() {

  }



}
