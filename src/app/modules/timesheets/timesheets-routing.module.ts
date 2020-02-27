import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetsComponent } from './pages/timesheets.component';
import { TimesheetCreationComponent } from './pages/timesheet-creation/timesheet-creation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetViewComponent } from './pages/timesheet-view/timesheet-view.component';
import { TimesheetEditComponent } from './pages/timesheet-edit/timesheet-edit.component';


const routes: Routes = [
  { path: '', component: TimesheetsComponent, data: { breadcrumb: null } },
  { path: 'creation', component: TimesheetCreationComponent, data: { breadcrumb: 'Timesheet Creation' } },
  { path: 'view/:timesheetId', component: TimesheetViewComponent, data: { breadcrumb: 'Timesheet Detail' } },
  { path: 'edit/:timesheetId', component: TimesheetEditComponent, data: { breadcrumb: 'Timesheet Edit' } },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class TimesheetsRoutingModule { }
