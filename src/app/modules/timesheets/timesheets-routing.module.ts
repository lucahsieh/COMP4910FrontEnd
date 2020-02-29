import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetsComponent } from './pages/timesheets.component';
import { TimesheetCreationComponent } from './pages/timesheet-creation/timesheet-creation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetViewComponent } from './pages/timesheet-view/timesheet-view.component';
import { TimesheetEditComponent } from './pages/timesheet-edit/timesheet-edit.component';
import { TimesheetApproverViewListComponent } from './pages/timesheet-approver-view-list/timesheet-approver-view-list.component';
import { TimesheetApproverViewComponent } from './pages/timesheet-approver-view/timesheet-approver-view.component';


const routes: Routes = [
  { path: '', component: TimesheetsComponent, data: { breadcrumb: null } },
  { path: 'creation', component: TimesheetCreationComponent, data: { breadcrumb: 'Creation' } },
  { path: 'view/:timesheetId', component: TimesheetViewComponent, data: { breadcrumb: 'Detail' } },
  { path: 'edit/:timesheetId', component: TimesheetEditComponent, data: { breadcrumb: 'Edit' } },
  { path: 'approver/view/list', component: TimesheetApproverViewListComponent, data: { breadcrumb: 'Pending List' } },
  { path: 'approver/view/:timesheetId', component: TimesheetApproverViewComponent, data: { breadcrumb: 'Pending Detail' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class TimesheetsRoutingModule { }
