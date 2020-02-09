import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './pages/employee.component';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';


const routes: Routes = [
  { path: '', component: EmployeeComponent, data: { breadcrumb: null } },
  { path: 'creation', component: EmployeeCreationComponent, data: { breadcrumb: 'Employee Creation' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
