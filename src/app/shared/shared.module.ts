import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { alertPrompComponent } from './alertPromp/alertPromp.component';
import { AlertComponent } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { MapToArrayPipe } from './pipe/map-to-array.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    MessageComponent,
    BreadcrumbComponent,
    TimesheetComponent,
    alertPrompComponent,
    MapToArrayPipe,
  ],
  imports: [
    // angular
    CommonModule,
    FormsModule,

    // primeng
    TableModule,
    DropdownModule,
    BreadcrumbModule,
    InputTextModule,
    DialogModule,
    ButtonModule,


    // bootstrap
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),


  ],
  exports: [
    MessageComponent,
    TimesheetComponent,
    BreadcrumbComponent,
    alertPrompComponent,
    MapToArrayPipe,
  ]
})
export class SharedModule { }
