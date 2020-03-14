import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';


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
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.initProjects();
    this.initCols();
  }

  initProjects() {
    this.projectService.getProjects().subscribe(res => {
      console.log(res);
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
      { field: 'projectId', header: 'Project ID' },
      { field: 'projectName', header: 'Project Name' },
      { field: 'projectManager', header: 'Project Manager' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'End Date' },
      { field: 'isClosed', header: 'Status' },
      { field: 'button', header: '' },
    ]
  }

}
