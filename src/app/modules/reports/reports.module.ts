import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports.component';
import { WpReportCreationComponent } from './pages/wp-report-creation/wp-report-creation.component';


@NgModule({
  declarations: [ReportsComponent, WpReportCreationComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
