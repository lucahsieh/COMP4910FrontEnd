import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WpService } from 'src/app/core/service/wp/wp.service';

@Component({
  selector: 'app-wp-list',
  templateUrl: './wp-list.component.html',
  styleUrls: ['./wp-list.component.css']
})
export class WpListComponent implements OnInit {

  @Input() projectId = 30; // NOTE: MUST HAVE
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
      //TODO: FIX THE TEST NUMBER
      .getAllWpByProjectId(this.projectId)
      .subscribe(res => {
        res.forEach(i => {
          let reName = "(Not Assigned)";
          if (i.responsibleEngineer !== null)
            reName = i.responsibleEngineer.empFirstName + " " + i.responsibleEngineer.empLastName;
          this.displayPackage.push(
            {
              "projectCode": i.projectCode,
              "projectName": i.projectName,
              "wpId": i.workPackageId,
              "wpTitle": i.workPackageTitle,
              "responsibleEngineer": reName,
              "status": i.isClosed,
              "wpCode": i.workPackageCode
            }
          )
        })
      })
    console.log("display wps")
    console.log(this.displayPackage);
  }

  initCols() {
    this.cols = [
      { field: 'projectCode', header: 'Project Code' },
      { field: 'projectName', header: 'Project Name' },
      { field: 'wpCode', header: 'WP Code' },
      { field: 'wpTitle', header: 'WP Title' },
      { field: 'responsibleEngineer', header: 'Responsible Engineer' },
      { field: 'status', header: 'Status' },
      { field: 'button', header: '' },
    ]
  }
}
