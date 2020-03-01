import { Component, OnInit, Input } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WPReport } from 'src/app/shared/model/WPReport';

@Component({
  selector: 'app-wp-report',
  templateUrl: './wp-report.component.html',
  styleUrls: ['./wp-report.component.css']
})
export class WpReportComponent implements OnInit {

  @Input() mode: MODE;
  @Input() wpr: WPReport;

  constructor() { }

  ngOnInit() {
  }

  /** exist edit field */
  onEditComplete(event) {
  }

  /** validate RE entry */
  validate(hr: number): boolean {

    return true;
  }
}
