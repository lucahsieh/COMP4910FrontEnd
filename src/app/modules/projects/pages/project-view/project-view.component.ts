import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { Project } from 'src/app/shared/model/Project';
import { MODE } from 'src/app/shared/model/MODE';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;
  mode = MODE.Read;
  alerts = {};

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('projectId');
      this.projectService.getProject(id).subscribe(e => this.project = e);
    });
  }
}
