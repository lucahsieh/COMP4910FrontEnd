import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  @Input() mode: MODE;
  @Input() alerts;
  employeeDropdown: SelectItem[] = null;
  employees: string[] = [];

  constructor(private projectService: ProjectService, private employeeService : EmployeeService) {
  }

  ngOnInit() {
    if (this.mode !== MODE.Read) this.populateEmployeeDropdown();
    this.teamMemberSelect();
  }

  // Populates the employee dropdown of "team members" section
  populateEmployeeDropdown() {
    this.employeeService
      .getEmployees()
      .subscribe(employees => {
        this.employeeDropdown = [];
        console.log(employees);
        employees.forEach(e => {
          console.log(e);
          this.employeeDropdown.push(
            { label: `${e.empFirstName} ${e.empLastName}`, value: e.employeeId }
          );
        })
        console.log(this.employeeDropdown);
      })
  }

  // Creates an array of names selected from "Team Members" section
  teamMemberSelect() {
    var temp = [];
    for (var i = 0; i < this.project.teamMembers.length; i++){
      temp.push(this.project.teamMembers[i].empFirstName + " " + this.project.teamMembers[i].empLastName);
    }
    this.employees = temp;
  }

}
