import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WPReport } from 'src/app/shared/model/WPReport';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/core/service/report/report.service';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { LabourGrade } from 'src/app/shared/model/LabourGrade';
import { Employee } from 'src/app/shared/model/Employee';
import { WpService } from 'src/app/core/service/wp/wp.service';

@Component({
  selector: 'app-wp-report-creation',
  templateUrl: './wp-report-creation.component.html',
  styleUrls: ['./wp-report-creation.component.css']
})
export class WpReportCreationComponent implements OnInit {

  mode: MODE = MODE.Create;
  wpr: WPReport;
  dataReady: boolean = false;
  @Input() wpCode: string;
  @Output() taskComplete: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private wpService: WpService,
  ) { }

  ngOnInit() {
    this.fetchAllLabourGrades();
    this.prepareEmptyReport();

  }

  prepareEmptyReport() {
    this.route.paramMap.subscribe(params => {
      this.wpr = new WPReport();
      this.wpService.getWpByWpCode(this.wpCode).subscribe(wp => {
        this.wpr.copyWPinfo(wp);
        this.wpr.initData();
        this.updateReBugetDay();
      })
      //TODO: call projectService to get project info.
      // this.wpr.copyProjectInfo(p);
      //TODO: call wpService to get wp info.
      // this.wpr.copyWPinfo(wp);   
      //NOTE: below is the sample result of the previous call completed.
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
          "totalDays": 0,
          "reETC": 0,
          "reEAC": 0,
          "variance": 0,
          "complete": 0
        }
      )
    })
  }

  updateReBugetDay() {
    this.wpr.details.forEach(d => {
      this.reportService.getReBudgetDays(
        this.wpr.workPackageCode, d.labourGradeId)
        .subscribe(res => {
          console.log('getReBudgetDays')
          console.log(res)
          d.reBudgetDay = res;
        });
    })
  }

  submitReport() {
    this.wpr.reportDate = new Date().toLocaleString();
    this.reportService.postWpReport(this.wpr).subscribe(res => {
      console.log(res);
      console.log('posted')
    });
    this.taskComplete.emit('onSubmit')
  }

  cancelEvent() {
    this.taskComplete.emit('onSubmit')
  }


}
