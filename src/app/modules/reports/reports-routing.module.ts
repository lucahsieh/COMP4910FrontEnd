import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './pages/reports.component';
import { WpReportCreationComponent } from './pages/wp-report-creation/wp-report-creation.component';
import { WpReportViewComponent } from './pages/wp-report-view/wp-report-view.component';


const routes: Routes = [
  { path: '', component: ReportsComponent, data: { breadcrumb: 'report list' } },
  { path: 'WorkPackageReport/view/:wprId', component: WpReportViewComponent, data: { breadcrumb: 'View Work Package Report' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }


