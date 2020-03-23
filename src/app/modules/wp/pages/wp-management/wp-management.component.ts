import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wp-management',
  templateUrl: './wp-management.component.html',
  styleUrls: ['./wp-management.component.css']
})
export class WpManagementComponent implements OnInit {

  activeIndex: number = 1;
  workPackageCode: string = '';

  wpReportId: string[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.workPackageCode = params.get('wpCode');
    });
    this.refreshTab();
    this.router.events.subscribe((val) => {
      this.refreshTab();
    });
  }

  toTab0() {
    this.activeIndex = 0;
  }
  onChangeTab(event) {
    this.activeIndex = event.index;
    // let path = this.location.path();
    // let pathwp = path;
    // let regex = /viewwp|createwp|editwp/gi;
    // if (path.includes('reports'))
    //   pathwp = path.substring(0, path.indexOf('reports'));
    // if (event.index === 1) { this.router.navigate([`${pathwp.replace(regex, 'viewwp')}`]); }
    // else if (event.index === 2) { this.router.navigate([`${pathwp.replace(regex, 'editwp')}`]); }
    // else if (event.index === 4 && this.wpReportUrl) { this.router.navigate([this.wpReportUrl]); }
    // else if (event.index === 2) {
    //   path = path.replace(regex, 'createwp');
    //   this.router.navigate([`${path.substring(0)}`]);
    // }

  }
  refreshTab() {
    let path = this.location.path();
    // if (path.includes("WorkPackageReport")) { this.wpReportUrl = this.location.path(); this.activeIndex = 4; }
    if (path.includes("viewwp")) { this.activeIndex = 1; }
    else if (path.includes("editwp")) { this.activeIndex = 2; }
  }
  async goReportPage(event) {
    console.log(event);
    this.wpReportId.push(event);
    console.log(this.wpReportId)
    await delay(300);
    this.activeIndex = this.wpReportId.length + 3;
  }



}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
