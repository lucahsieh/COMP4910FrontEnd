import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wp-management',
  templateUrl: './wp-management.component.html',
  styleUrls: ['./wp-management.component.css']
})
export class WpManagementComponent implements OnInit {

  activeIndex: number = 1;

  constructor(
    private location: Location,
  ) {
    let path = location.path();
    if (path.includes("wp") || path.includes("reports")) { this.toTab0(); };
  }

  ngOnInit() {
  }

  toTab0() {
    this.activeIndex = 0;
    console.log("recieve")
  }
  onChangeTab(event) {
    this.activeIndex = event.index;
    if (event.index === 0) { }
  }

}
