import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetsComponent } from './pages/timesheets.component';


const routes: Routes = [
  { path: '', data: { breadcrumb: 'timesheet list' }, component: TimesheetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetsRoutingModule { }
