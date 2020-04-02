import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  displayProject: any[] = [];
  cols: any[];

  constructor(
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.initProjects();
    this.initCols();
  }

  initProjects() {
    var empId = this.authService.currentUserValue.employeeId;
    console.log(empId)
    this.projectService
      .getProjects(empId)
      .subscribe(res => {
        console.log(res);
        res.forEach(i => {
          console.log(i)
          let projectManagerName = ' '
          if (i.projectManager) {
            projectManagerName = i.projectManager.empFirstName + " " + i.projectManager.empLastName;
          }
          this.displayProject.push(
            {
              "projectId": i.projectId,
              "projectName": i.projectName,
              "projectManager": projectManagerName,
              "startDate": i.startDate,
              "endDate": i.endDate,
              "isClosed": !i.isClosed
            }
          );
        })
        console.log(this.displayProject);
      });
  }

  initCols() {
    this.cols = [
      { field: 'projectName', header: 'Project Name' },
      { field: 'projectManager', header: 'Project Manager' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'End Date' },
      { field: 'isClosed', header: 'Status' },
      { field: 'button', header: '' },
    ]
  }

}
