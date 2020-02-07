import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    MessageComponent,
    BreadcrumbComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    TableModule,
    DropdownModule,
    BreadcrumbModule,

  ],
  exports: [
    MessageComponent,
    TimesheetComponent,
    BreadcrumbComponent,
  ]
})
export class SharedModule { }
