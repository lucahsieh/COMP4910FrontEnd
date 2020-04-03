import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MyToastService } from 'src/app/core/service/my-toast.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project: Project;
  mode = MODE.Update;
  teamMembers: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  // project validation
  validStartDate: boolean = false;
  alerts = {};

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private myToastService: MyToastService,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('projectId');
      this.projectService.getProject(id).subscribe(e => this.project = e);
    });
  }

  onUpdate() {
    if (!this.validatePage()) {
      this.myToastService.addError('Your data entry is rejected.', 'Please review the highlighted fields');
      return;
    } console.log("POST project");
    console.log(JSON.stringify(this.project));
    this.projectService.putProject(this.project).subscribe(_ => {
      this.myToastService.addSuccess(`Project Saved Successfully`, `Project ${this.project.projectName} saved ${new Date().toLocaleString}.`);
      this.router.navigate([`/content/projects/view/${this.project.projectId}`]);
    });
  }

  //brings user back to projects list
  onCancel(e: any) {
    this.router.navigate(['/content/projects']);
  }

  validatePage(): boolean {
    var result = true;
    if (!this.project.projectName === null || this.project.projectName.match(/^ *$/) !== null) {
      this.alerts['projectName'] = new Alert('danger', 5000, `Project Name cannot be empty`);
      result = false;
    }
    if (isNaN(this.project.projectCode)) {
      this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code must be a number`);
      result = false;
    }
    if (this.project.startDate === null) {
      this.alerts['startDate'] = new Alert('danger', 5000, `Start Date cannot be empty`);
      result = false;
    }
    if (this.project.endDate === null) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End Date cannot be empty`);
      result = false;
    }
    if (this.project.startDate > this.project.endDate) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End date must be after the start Date`);
      result = false;
    }
    return result;
  }

  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }



}
