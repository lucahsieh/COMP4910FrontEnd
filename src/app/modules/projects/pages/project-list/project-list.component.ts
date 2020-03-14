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
    this.initEmployees();
    this.initCols();
    // this.initProjects();
    // this.initCols();
  }

  initEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      console.log(res);
      res.forEach(i => {
        console.log(i)
        this.displayProject.push(
          {
            "employeeId": i.employeeId,
            "empCode": i.empCode,
            "empName": `${i.empFirstName} ${i.empLastName}`,
            "empUsername": i.empUsername,
            'supervisorName': `${i.supervisor.empFirstName} ${i.supervisor.empLastName}`,
            'approverName': `${i.timesheetApprover.empFirstName} ${i.timesheetApprover.empLastName}`,
            'activation': i.isActivated,
          }
        );
      })
      console.log(this.displayProject);
    });
  }

  // initProjects() {
  //   this.projectService.getProjects().subscribe(res => {
  //     console.log(res);
  //     res.forEach(i => {
  //       console.log(i)
  //       this.displayProject.push(
  //         {
  //           "projectId": i.projectId,
  //           "projectName": i.projectName,
  //           "projectManager": i.projectManager,
  //           "startDate": i.startDate,
  //           "endDate": i.endDate,
  //           "isClosed": i.isClosed
  //         }
  //       );
  //     })
  //     console.log(this.displayProject);
  //   });
  // }

  initCols() {
    this.cols = [
      { field: 'empCode', header: 'Employee ID' },
      { field: 'empName', header: 'Employee Name' },
      { field: 'empUsername', header: 'User Name' },
      { field: 'supervisorName', header: 'Supervisor' },
      { field: 'approverName', header: 'Approver' },
      { field: 'activation', header: 'Activation' },
      { field: 'button', header: '' },
    ]
  }

  // initCols() {
  //   this.cols = [
  //     { field: 'projectId', header: 'Project ID' },
  //     { field: 'projectName', header: 'Project Name' },
  //     { field: 'projectManager', header: 'Project Manager' },
  //     { field: 'startDate', header: 'Start Date' },
  //     { field: 'endDate', header: 'End Date' },
  //     { field: 'isClosed', header: 'Status' },
  //     { field: 'button', header: '' },
  //   ]
  // }

}
