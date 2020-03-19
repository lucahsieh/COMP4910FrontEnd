import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WpListComponent } from './pages/wp-list/wp-list.component';
import { WpCreateComponent } from './pages/wp-create/wp-create.component';
import { WpViewComponent } from './pages/wp-view/wp-view.component';
import { WpEditComponent } from './pages/wp-edit/wp-edit.component';


const routes: Routes = [
  { path: '', component: WpListComponent, data: { breadcrumb: null } },
  { path: 'view/:empId', component: WpViewComponent, data: { breadcrumb: 'Employee View' } },
  { path: 'edit/:empId', component: WpEditComponent, data: { breadcrumb: 'Employee Edit' } },
  { path: 'creation', component: WpCreateComponent, data: { breadcrumb: 'Employee Creation' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WpRoutingModule { }
