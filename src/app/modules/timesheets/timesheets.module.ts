import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { TimesheetsComponent } from './pages/timesheets.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TimesheetsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TimesheetsRoutingModule,
  ]
})
export class TimesheetsModule { }
