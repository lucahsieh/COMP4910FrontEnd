import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.css']
})
export class ProjectCreationComponent implements OnInit {

  project: Project;
  mode = MODE.Create;
  teamMembers: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  // project validation
  validProjectCode: boolean = false;
  valideStartDate: boolean = false;
  alerts = {};

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
        this.project = new Project();
  }

  onCreate(e: any) {
    if (!this.validatePage())
      return;
    console.log("POST project");
    console.log(JSON.stringify(this.project));
    //this.projectService.postProject(this.project).subscribe();
  }

  onCancel(e: any) { }

  validatePage(): boolean {
    return true;
  }

}
