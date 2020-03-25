import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeViewComponent } from './pages/employee-view/employee-view.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { EmployeeChangeApproverComponent } from './pages/employee-change-approver/employee-change-approver.component';
import { EmployeeResetPWComponent } from './pages/employee-reset-pw/employee-reset-pw.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent, data: { breadcrumb: null } },
  { path: 'changePassword', component: EmployeeResetPWComponent, data: { breadcrumb: 'Change Password' } },
  { path: 'supervisor/changeTimesheetApprover', component: EmployeeChangeApproverComponent, data: { breadcrumb: 'Change Timesheet Approver' } },
  { path: 'view/:empId', component: EmployeeViewComponent, data: { breadcrumb: 'Employee View' } },
  { path: 'edit/:empId', component: EmployeeEditComponent, data: { breadcrumb: 'Employee Edit' } },
  { path: 'creation', component: EmployeeCreationComponent, data: { breadcrumb: 'Employee Creation' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
