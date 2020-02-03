import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { TimesheetsComponent } from './pages/timesheets.component';



@NgModule({
  declarations: [
    TimesheetsComponent
  ],
  imports: [
    CommonModule,
    TimesheetsRoutingModule
  ]
})
export class TimesheetsModule { }
