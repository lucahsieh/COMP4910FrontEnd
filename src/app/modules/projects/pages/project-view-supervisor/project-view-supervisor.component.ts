import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { MODE } from 'src/app/shared/model/MODE';
import { Project } from 'src/app/shared/model/Project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { MyToastService } from 'src/app/core/service/my-toast.service';

@Component({
  selector: 'app-project-view-supervisor',
  templateUrl: './project-view-supervisor.component.html',
  styleUrls: ['./project-view-supervisor.component.css']
})
export class ProjectViewSupervisorComponent implements OnInit {

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
    console.log("POST project Member management");
    console.log(JSON.stringify(this.project));
    this.projectService.putProject(this.project).subscribe(_ => {
      this.myToastService.addSuccess(`Project Members Saved Successfully`, `${new Date().toLocaleString()}`);
      this.router.navigate([`/content/projects/view/${this.project.projectId}`]);
    });
  }

  //brings user back to projects list
  onCancel(e: any) {
    this.router.navigate(['/content/projects']);
  }

  validatePage(): boolean {
    return true;
  }

  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }
}
