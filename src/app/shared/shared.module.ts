import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';



@NgModule({
  declarations: [MessageComponent, BreadcrumbComponent, TimesheetComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
