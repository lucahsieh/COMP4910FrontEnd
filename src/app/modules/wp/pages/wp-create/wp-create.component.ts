import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WpService } from 'src/app/core/service/wp/wp.service';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { PMPlanning } from 'src/app/shared/model/PMPlanning';

@Component({
  selector: 'app-wp-create',
  templateUrl: './wp-create.component.html',
  styleUrls: ['./wp-create.component.css']
})
export class WpCreateComponent implements OnInit {

  wp: WorkPackage;
  hours: PMPlanning[];

  //wpCode validation
  validWpCode: boolean = false;
  alerts = {};
  mode = MODE.Create;

  constructor(
    private wpService: WpService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.wp = new WorkPackage();
    this.wp.projectName = "The Best Project";
    this.wp.projectId = 11223344;
    const today = new Date();
    today.getTime();
    this.wp.issueDate = this.dateFormater(today);
  }

  // btn click event of creation
  onCreate(e: any) {
    if (!this.validatePage())
      return;
    console.log("POST employee");
    console.log(JSON.stringify(this.wp));
    this.wpService.postWorkPackage(this.wp).subscribe();
  }

  // btn click event of cancel
  onCancel(e: any) { }


  initLabourGradePlanning() {
    this.wp.pmPlannings = [];
    this.employeeService.getLabourGrades().subscribe(grades => {
      grades.forEach(grade => {
        let line = {
          "labourGradeId": grade.labourGradeId,
          "labourGradeName": grade.labourGradeName,
          "pmEAC": 0,
          "reBudget": 0
        };
        this.wp.pmPlannings.push(line);
      })
    })
  }

  validatePage(): boolean {
    var result = true;
    /* if (!this.wp.workPackageTitle === null || this.wp.workPackageTitle.match(/^ *$/) === null) {
      this.alerts['wpTitle'] = new Alert('danger', 5000, `WP Title cannot be empty`);
      result = false;
    }
    if (!this.wp.contractor === null || this.wp.contractor.match(/^ *$/) !== null) {
      this.alerts['lastName'] = new Alert('danger', 5000, `Contractor cannot be empty`);
      result = false;
    }
     if (!this.validWpCode) {
      this.alerts['wpCode'] = new Alert('danger', 5000, `WP Code: ${this.wp.workPackageCode} is not valid`);
      result = false;
    }
   if (!this.validEmployeeCode) {
      this.alerts['employeeCode'] = new Alert('danger', 5000, `Employee ID : ${this.employee.empCode} is not allowed`);
      result = false;
    } */
    return result;
  }
  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }


  validateWpCode() {
    return true;
  }

  onValueChange(value: Date): void {
    console.log(value);
    this.wp.issueDate = this.dateFormater(value);
  }

  dateFormater(d: Date) {
    var yyyy = d.getFullYear();
    var MM = ("00" + (d.getMonth() + 1)).slice(-2);
    var dd = ("00" + (d.getDate())).slice(-2);
    return `${yyyy}-${MM}-${dd}`;
  }

  stringToDate(s: string) {
    var date = new Date(s);
    console.log(date);
    return date;
  }
}