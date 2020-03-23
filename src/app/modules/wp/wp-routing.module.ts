import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WpListComponent } from './pages/wp-list/wp-list.component';
import { WpCreateComponent } from './pages/wp-create/wp-create.component';
import { WpViewComponent } from './pages/wp-view/wp-view.component';
import { WpEditComponent } from './pages/wp-edit/wp-edit.component';


const routes: Routes = [
  // { path: '', component: WpListComponent, data: { breadcrumb: null } },
  // { path: 'view/:wpCode', component: WpViewComponent, data: { breadcrumb: 'Work Package View' } },
  // { path: 'edit/:wpCode', component: WpEditComponent, data: { breadcrumb: 'Work Package Edit' } },
  // { path: 'creation', component: WpCreateComponent, data: { breadcrumb: 'Work Package Creation' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WpRoutingModule { }
