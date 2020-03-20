import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './pages/reports.component';
import { WpReportCreationComponent } from './pages/wp-report-creation/wp-report-creation.component';
import { WpReportViewComponent } from './pages/wp-report-view/wp-report-view.component';
import { ProjectReportViewComponent } from './pages/project-report-view/project-report-view.component';


const routes: Routes = [
  { path: '', component: ReportsComponent, data: { breadcrumb: 'report list' } },
  { path: 'ProjectCostPerformanceReport/view/:projectReportId', component: ProjectReportViewComponent, data: { breadcrumb: 'Project Cost Performance Report' } },
  { path: 'WorkPackageReport/view/:wprId', component: WpReportViewComponent, data: { breadcrumb: 'View Work Package Report' } },
  { path: 'WorkPackageReport/creation/:wpId/:projectId', component: WpReportCreationComponent, data: { breadcrumb: 'Create Work Package Report' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }


