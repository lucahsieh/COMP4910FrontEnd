import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
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

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    // this.project = new Project();
  }

}
