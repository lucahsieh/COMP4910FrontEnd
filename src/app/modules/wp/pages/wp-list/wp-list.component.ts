import { Component, OnInit } from '@angular/core';
import { WpService } from 'src/app/core/service/wp/wp.service';

@Component({
  selector: 'app-wp-list',
  templateUrl: './wp-list.component.html',
  styleUrls: ['./wp-list.component.css']
})
export class WpListComponent implements OnInit {

  displayPackage: any[] = [];
  cols: any[];

  constructor(
    private wpService: WpService
  ) { }

  ngOnInit() {
    this.initPackages();
    this.initCols();
  }

  initPackages() {
    this.wpService
      .getAllWp()
      .subscribe(res => {
      res.forEach(i => {
        this.displayPackage.push (
          {
            "projectId": i.projectId,
            "projectName": i.projectName,
            "wpId": i.workPackageId,
            "wpTitle": i.workPackageTitle,
            "responsibleEngineer": i.responsibleEngineer.empFirstName + " " + i.responsibleEngineer.empLastName,
            "status": i.isClosed
          }
        )
      })
    })
  }

  initCols() {
    this.cols = [
      { field: 'projectId', header: 'Project ID' },
      { field: 'projectName', header: 'Project Name' },
      { field: 'wpId', header: 'WP Id' },
      { field: 'wpTitle', header: 'WP Title' },
      { field: 'responsibleEngineer', header: 'Responsible Engineer' },
      { field: 'status', header: 'Status'},
      { field: 'button', header: '' },
    ]
  }
}
