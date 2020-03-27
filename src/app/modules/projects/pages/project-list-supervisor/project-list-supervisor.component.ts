import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-project-list-supervisor',
  templateUrl: './project-list-supervisor.component.html',
  styleUrls: ['./project-list-supervisor.component.css']
})
export class ProjectListSupervisorComponent implements OnInit {


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
    this.projectService
      .getAllOpenProject()
      .subscribe(res => {
        console.log(res)
        res.forEach(i => {
          console.log(i)
          this.displayProject.push(
            {
              "projectId": i.projectId,
              "projectName": i.projectName,
              "projectManager": i.projectManager.empFirstName + " " + i.projectManager.empLastName,
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
