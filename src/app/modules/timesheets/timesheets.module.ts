import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { TimesheetsComponent } from './pages/timesheets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetCreationComponent } from './pages/timesheet-creation/timesheet-creation.component';
import { TimesheetListComponent } from './pages/timesheet-list/timesheet-list.component';

import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    TimesheetsComponent,
    TimesheetCreationComponent,
    TimesheetListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TimesheetsRoutingModule,

    // primeng
    TableModule,
  ]
})
export class TimesheetsModule { }
