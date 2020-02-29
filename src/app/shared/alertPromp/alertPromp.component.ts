import { Component, OnInit, Input } from '@angular/core';
import { Alert } from 'src/app/shared/model/Alert';

@Component({
  selector: 'shared-alertPromp',
  templateUrl: './alertPromp.component.html',
  styleUrls: ['./alertPromp.component.css']
})
export class alertPrompComponent implements OnInit {

  @Input() alerts;
  constructor() { }

  ngOnInit() {
  }

  alertsToArray() {
    return Object.values(this.alerts);
  }
}
