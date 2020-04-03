import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetRow } from 'src/app/shared/model/TimesheetRow';
import { TimesheetStatus } from 'src/app/shared/model/TimesheetStatus';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { User } from 'src/app/shared/model/User';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { MODE } from 'src/app/shared/model/MODE';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { MyToastService } from 'src/app/core/service/my-toast.service';
import { Router } from '@angular/router';
import { TimesheetComponent } from 'src/app/shared/components/timesheet/timesheet.component';

@Component({
  selector: 'app-timesheet-creation',
  templateUrl: './timesheet-creation.component.html',
  styleUrls: ['./timesheet-creation.component.css']
})
export class TimesheetCreationComponent implements OnInit {

  dataReady = false;
  mode: MODE = MODE.Create;
  timesheet: Timesheet = null;
  projectWp: any[];

  modalRef: BsModalRef;
  currentUser: User = this.authenticationService.currentUserValue;

  @ViewChild(TimesheetComponent, { static: false })
  private timesheetCmp: TimesheetComponent;

  constructor(
    private timesheetService: TimesheetService,
    private projectService: ProjectService,
    private modalService: BsModalService,
    private myToastService: MyToastService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.setEmptyTimesheetData();
    this.prepareprojectWp();
  }

  onSubmitConfrimed() {

    this.timesheet.status = TimesheetStatus.pending;
    this.timesheetService.postTimesheet(this.timesheet).subscribe(_ => {
      this.modalRef.hide();
      this.myToastService.addSuccess('Timesheet Sumitted Successfully', `Timesheet of week ${this.timesheet.weekEndingIn} is sumitted to your supervisor.`);
      this.router.navigate([`/content/timesheets`]);
    })
  }

  onSubmit(e: any, template: TemplateRef<any>) {
    this.timesheetCmp.validatePage()
    if (!this.timesheetCmp.validatePage()) {
      console.log('not pass')
      return;
    }
    this.modalRef = this.modalService.show(template);
  }

  onSave(e: any) {
    this.timesheetCmp.validatePage()
    if (!this.timesheetCmp.validatePage()) {
      console.log('not pass')
      return;
    }
    console.log(`post timesheet:`);
    console.log(JSON.stringify(this.timesheet));
    this.timesheetService.postTimesheet(this.timesheet).subscribe(_ => {
      this.myToastService.addInfo(`Timesheet Updated`, `Timesheet of week ${this.timesheet.weekEndingIn} saved on ${new Date().toLocaleString()}`);
      this.router.navigate([`/content/timesheets`]);
    });
  }


  setEmptyTimesheetData() {
    this.timesheetService
      .getAvaliableTimesheetId()
      .subscribe(result => {
        var newTimesheet = new Timesheet();
        var weekEndingIn = new Date();
        var shit: number = 5 - weekEndingIn.getDay();
        weekEndingIn.setDate(weekEndingIn.getDate() + shit);
        newTimesheet.weekEndingIn = this.dateFormater(weekEndingIn);
        newTimesheet.weekNumber = this.getWeek(weekEndingIn);

        console.log(result);
        // init attirbutes
        newTimesheet.timesheetId = result.id;
        newTimesheet.employeeId = this.currentUser.employeeId;
        newTimesheet.versionNumber = 1;
        newTimesheet.status = TimesheetStatus.inProgress;
        console.log(newTimesheet.status);
        // Create 5 empty rows at page load.
        for (var i = 0; i < 5; i++)
          newTimesheet.timesheetRows.push(new TimesheetRow(newTimesheet.timesheetId, newTimesheet.versionNumber, 0, 0));

        this.timesheet = newTimesheet;
        this.dataReady = true;
      })

  }

  prepareprojectWp() {
    this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(result => {
      this.projectWp = [];
      console.log(result)
      result.forEach(p => {
        if (p.workPackageViewModels)
          p.workPackageViewModels.forEach(wp => {
            this.projectWp.push({ 'projectId': p.projectId, 'projectName': p.projectName, 'wpId': wp.workPackageId, 'wpCode': wp.workPackageCode })
          });
      });
    });
  }









  // helper functions
  getWeek(date: Date) {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  dateFormater(d: Date) {
    var yyyy = d.getFullYear();
    var MM = ("00" + (d.getMonth() + 1)).slice(-2);
    var dd = ("00" + (d.getDate() + 1)).slice(-2);
    return `${yyyy}-${MM}-${dd}`;
  }
  /**
  * 
  * @param s with format "2020-10-11"
  */
  stringToDate(s: string) {
    var date = new Date(s);
    console.log(date);
    return date;
  }
}
