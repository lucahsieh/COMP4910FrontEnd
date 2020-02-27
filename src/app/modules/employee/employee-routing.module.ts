import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeViewComponent } from './pages/employee-view/employee-view.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent, data: { breadcrumb: null } },
  { path: 'view/:id', component: EmployeeViewComponent, data: { breadcrumb: 'Employee View' } },
  { path: 'creation', component: EmployeeCreationComponent, data: { breadcrumb: 'Employee Creation' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
