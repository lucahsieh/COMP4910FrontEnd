import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api/menuitem';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

  opened: boolean = true;
  showFiller = true;

  constructor(

  ) { }


  ngOnInit() {
  }




}
