import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { MODE } from 'src/app/shared/model/MODE';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {

  project: Project;
  mode = MODE.Read;
  alerts = {};

  activeIndex: number = 1;

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private projectService: ProjectService) {
    let path = location.path();
    if (path.includes("wp") || path.includes("reports")) { this.toTab0(); };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('projectId');
      this.projectService.getProject(id).subscribe(e => this.project = e);
    });
    this.router.events.subscribe((data) => {
      this.toTab0();
    })
  }

  toTab0() {
    this.activeIndex = 0;
  }
  onChangeTab(event) {
    this.activeIndex = event.index;
    console.log(this.activeIndex);
  }
}
