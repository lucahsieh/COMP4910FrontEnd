import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WpComponent } from './pages/wp.component';


const routes: Routes = [
  { path: '', component: WpComponent, data: { breadcrumb: null } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WpRoutingModule { }
