import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Employee } from 'src/app/shared/model/Employee';
import { User, convertToEmployee } from 'src/app/shared/model/User';
import { MyToastService } from 'src/app/core/service/my-toast.service';

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.css']
})
export class ProjectCreationComponent implements OnInit {

  newProject: Project;
  mode = MODE.Create;
  teamMembers: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  // project validation
  validProjectCode: boolean = false;
  validStartDate: boolean = false;
  alerts = [];

  constructor(
    private projectService: ProjectService,
    private authService: AuthenticationService,
    private myToastService: MyToastService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.newProject = new Project();
    let currentUser: User = this.authService.currentUserValue;
    this.newProject.projectManager = convertToEmployee(currentUser);
    console.log(`look`);
    console.log(this.newProject)
  }

  onCreate(e: any) {
    if (!this.validatePage()) {
      this.myToastService.addError('Your data entry is rejected.', 'Please review the highlighted fields');
      console.log(this.alerts)
      // for (let key in this.alerts) {
      //   let value = this.alerts[key];
      //   this.myToastService.addError('Validation Error', `${value.msg}`);
      // }
      return;
    }
    this.projectService.postProject(this.newProject).subscribe(_ => {
      this.myToastService.addSuccess(`Project created Successfully`, `Project ${this.newProject.projectName} created.`);
      this.router.navigate([`/content/projects`]);
    });
  }

  //brings user back to projects list
  onCancel(e: any) {
    this.router.navigate(['/content/projects']);
  }

  validatePage(): boolean {
    this.alerts = [];
    var result = true;
    if (!this.newProject.projectName === null || this.newProject.projectName.match(/^ *$/) !== null) {
      this.alerts['projectName'] = new Alert('danger', 5000, `Project Name cannot be empty`);
      result = false;
    }
    if (isNaN(this.newProject.projectCode)) {
      this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code must be a number`);
      result = false;
    }
    if (this.newProject.startDate === null) {
      this.alerts['startDate'] = new Alert('danger', 5000, `Start Date cannot be empty`);
      result = false;
    }
    if (this.newProject.endDate === null) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End Date cannot be empty`);
      result = false;
    }
    if (this.newProject.startDate > this.newProject.endDate) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End date must be after the start Date`);
      result = false;
    }
    if (!this.validProjectCode) {
      this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code : ${this.newProject.projectCode} is not allowed`);
      result = false;
    }
    return result;
  }

  // displayErrorMsg(fieldName: string) {
  //   return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  // }

  // validates projectCode is unique
  validateProjectCode() {
    this.projectService.checkProjectCode(this.newProject.projectCode)
      .subscribe(response => {
        console.log(response);
        this.validProjectCode = response;
        console.log(this.validProjectCode);
      });
  }

}
