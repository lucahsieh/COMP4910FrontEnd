import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Timesheet } from 'src/app/shared/model/Timesheet';
import { TimesheetStatus } from 'src/app/shared/model/TimesheetStatus';
import { User } from 'src/app/shared/model/User';
import { SelectItem } from 'primeng/api/selectitem';
import { TimesheetService } from 'src/app/core/service/timesheet/timesheet.service';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { MODE } from 'src/app/shared/model/MODE';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { MyToastService } from 'src/app/core/service/my-toast.service';
import { TimesheetComponent } from 'src/app/shared/components/timesheet/timesheet.component';

@Component({
  selector: 'app-timesheet-edit-version',
  templateUrl: './timesheet-edit-version.component.html',
  styleUrls: ['./timesheet-edit-version.component.css']
})
export class TimesheetEditVersionComponent implements OnInit {


  mode: MODE = MODE.Update;
  timesheet: Timesheet = null;
  projectDropdown: SelectItem[] = null;
  employeeWPs: any[] = null;
  projectWp: any[];

  modalRef: BsModalRef;
  currentUser: User = this.authenticationService.currentUserValue;


  @ViewChild(TimesheetComponent, { static: false })
  private timesheetCmp: TimesheetComponent;

  constructor(
    private route: ActivatedRoute,
    private timesheetService: TimesheetService,
    private projectService: ProjectService,
    private modalService: BsModalService,
    private myToastService: MyToastService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('timesheetId');
      console.log(`current timesheet id is  ${id}`);
      this.timesheetService.getTimesheet(id).subscribe(ts => this.timesheet = ts);
    });
    this.prepareprojectWp();
  }

  // onSubmit(e: any) {
  //   // increment the version. since it is using the old timesheet to create a new one
  //   this.timesheet.versionNumber += 1;
  //   this.timesheet.status = TimesheetStatus.pending;
  //   this.timesheetService.putTimesheet(this.timesheet).subscribe(_ => {
  //     // TODO : nagvigate to this page "/content/timesheets"
  //   });
  // }
  // onSave(e: any) {
  //   // increment the version. since it is using the old timesheet to create a new one
  //   this.timesheet.versionNumber += 1;
  //   this.timesheet.status = TimesheetStatus.inProgress;
  //   console.log(`post timesheet new version:`);
  //   console.log(JSON.stringify(this.timesheet));
  //   this.timesheetService.putTimesheet(this.timesheet).subscribe(_ => {
  //     // TODO : nagvigate to this page "/content/timesheets"
  //   });
  // }

  onSubmitConfrimed() {
    // increment the version. since it is using the old timesheet to create a new one
    this.timesheet.versionNumber += 1;
    this.timesheet.status = TimesheetStatus.pending;
    this.timesheetService.postTimesheet(this.timesheet).subscribe(_ => {
      this.modalRef.hide();
      this.myToastService.addSuccess('Timesheet Sumitted Successfully', `Timesheet of week ${this.timesheet.weekEndingIn} Version: ${this.timesheet.versionNumber} is sumitted to your supervisor.`);
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
  onCancel(e: any) {
    this.router.navigate([`/content/timesheets`]);
  }

  onSave(e: any) {
    this.timesheetCmp.validatePage()
    if (!this.timesheetCmp.validatePage()) {
      console.log('not pass')
      return;
    }
    // increment the version. since it is using the old timesheet to create a new one
    this.timesheet.versionNumber += 1;
    this.timesheet.status = TimesheetStatus.inProgress;
    console.log(`post timesheet new version:`);
    console.log(JSON.stringify(this.timesheet));
    this.timesheetService.postTimesheet(this.timesheet).subscribe(_ => {
      this.myToastService.addInfo(`Timesheet Updated in Version ${this.timesheet.versionNumber}`, `Timesheet of week ${this.timesheet.weekEndingIn} saved on ${new Date().toLocaleString()}`);
      this.router.navigate([`/content/timesheets`]);
    });
  }


  prepareprojectWp() {
    this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(result => {
      this.projectWp = [];
      result.forEach(p => {
        p.workPackages.forEach(wp => {
          this.projectWp.push({ 'projectId': p.projectId, 'projectName': p.projectName, 'wpId': wp.workPackageId, 'wpCode': wp.workPackageCode })
        });
      });
    });
  }

  colorStatus(status: string) {
    switch (status) {
      case 'Approved': return 'badge badge-pill badge-success';
      case 'Rejected': return 'badge badge-pill badge-danger';
      case 'Pending': return 'badge badge-pill badge-warning';
      case 'Inprogress': return 'badge badge-pill badge-info';
      default: return 'badge badge-pill badge-dark';
    }
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