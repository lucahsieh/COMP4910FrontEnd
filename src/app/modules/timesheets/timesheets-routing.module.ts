import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetsComponent } from './pages/timesheets.component';
import { TimesheetCreationComponent } from './pages/timesheet-creation/timesheet-creation.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: '', component: TimesheetsComponent, data: { breadcrumb: null } },
  { path: 'creation', component: TimesheetCreationComponent, data: { breadcrumb: 'Timesheet Creation' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class TimesheetsRoutingModule { }
