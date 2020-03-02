import { Component, OnInit } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WPReport } from 'src/app/shared/model/WPReport';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/core/service/report/report.service';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { LabourGrade } from 'src/app/shared/model/LabourGrade';
import { Employee } from 'src/app/shared/model/Employee';

@Component({
  selector: 'app-wp-report-creation',
  templateUrl: './wp-report-creation.component.html',
  styleUrls: ['./wp-report-creation.component.css']
})
export class WpReportCreationComponent implements OnInit {

  mode: MODE = MODE.Create;
  wpr: WPReport;
  dataReady: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.fetchAllLabourGrades();
    this.prepareEmptyReport();

  }

  prepareEmptyReport() {
    this.route.paramMap.subscribe(params => {
      var projectId = params.get('projectId');
      var wpId = params.get('wpId');
      this.wpr = new WPReport();
      //TODO: call projectService to get project info.
      // this.wpr.copyProjectInfo(p);
      //TODO: call wpService to get wp info.
      // this.wpr.copyWPinfo(wp);   
      //NOTE: below is the sample result of the previous call completed.
      this.wpr.initData();
    });
  }

  fetchAllLabourGrades() {
    this.employeeService.getLabourGrades().subscribe(result => this.populateDetails(result))
  }
  populateDetails(labourGrades: LabourGrade[]) {
    console.log(labourGrades)
    labourGrades.forEach(grade => {
      this.wpr.details.push(
        {
          "labourGradeId": grade.labourGradeId,
          "labourGradeName": grade.labourGradeName,
          "reBudgetDay": 0,
          "actualToDate": 0,
          "reEestimate": 0,
          "variance": 0,
          "complete": 0
        }
      )
    })
  }

  submitReport() {
    console.log(this.wpr);
    this.reportService.postWpReport(this.wpr)
  }


}
