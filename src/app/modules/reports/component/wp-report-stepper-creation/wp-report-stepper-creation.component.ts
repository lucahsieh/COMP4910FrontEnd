import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { WPReport } from 'src/app/shared/model/WPReport';
import { dateRangeValidator } from 'src/app/shared/validator/DateRangeValidator';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { LabourGrade } from 'src/app/shared/model/LabourGrade';
import { ReportService } from 'src/app/core/service/report/report.service';
import { WPReportRow } from 'src/app/shared/model/WPReportRow';

@Component({
  selector: 'app-wp-report-stepper-creation',
  templateUrl: './wp-report-stepper-creation.component.html',
  styleUrls: ['./wp-report-stepper-creation.component.css']
})
export class WpReportStepperCreationComponent implements OnInit {

  firstFormGroup: FormGroup;
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() submitEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() wpr: WPReport;

  labourGrades: LabourGrade[];

  constructor(
    private _formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    }, { validators: dateRangeValidator });
  }
  get f() { return this.firstFormGroup.controls; }

  onStepChange(event: any) {
    console.log(event)
    console.log(event.selectedIndex)
    if (event.selectedIndex === 1) {
      this.wpr.details.forEach(row => {
        this.reportService
          .calculateActual(this.wpr.workPackageCode, this.f.startDate.value, this.f.endDate.value, row.labourGradeId)
          .subscribe(result => {
            console.log(result);
            row.totalDays = result;
            this.updateEAC(row);
            this.updateComplete(row);
            this.updateVariance(row);
          });
      })
    }
  }

  // (estimated - budget) / budget
  updateVariance(row: WPReportRow) {
    if (isNaN(row.reETC)) return;
    if (isNaN(row.reBudgetDay)) return;
    let estimate: number = row.reEAC;
    let budget: number = row.reBudgetDay;
    row.variance = (estimate - budget) / budget * 100;
    if (isNaN(row.variance) || !isFinite(row.variance))
      row.variance = 0;
    return row.variance;
  }

  // (actual) / estimate
  updateComplete(row: WPReportRow) {
    if (isNaN(row.totalDays)) return;
    if (isNaN(row.reETC)) return;
    let estimate: number = row.reEAC;
    let actual: number = row.totalDays;
    row.complete = actual / estimate * 100;
    if (isNaN(row.complete) || !isFinite(row.complete))
      row.complete = 0;
    return row.complete;
  }
  updateEAC(row: WPReportRow) {
    if (isNaN(row.totalDays)) return;
    if (isNaN(row.reETC)) return;
    let estimate: number = row.reETC;
    let actual: number = row.totalDays;
    row.reEAC = 0 + estimate + actual;
  }

  onEditComplete(event) {
    console.log(event);
    let row: WPReportRow = event.data;
    this.updateEAC(row);
    this.updateComplete(row);
    this.updateVariance(row);
  }

  onSubmit(event) {
    this.wpr.startDate = this.firstFormGroup.controls.startDate.value;
    this.wpr.endDate = this.firstFormGroup.controls.endDate.value;
    this.submitEvent.emit('payload');
  }
  onCancel(event) {
    this.cancelEvent.emit('payload');
  }

}