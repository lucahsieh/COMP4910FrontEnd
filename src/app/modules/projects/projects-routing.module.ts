import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreationComponent } from './pages/project-creation/project-creation.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { WpViewComponent } from '../wp/pages/wp-view/wp-view.component';
import { WpEditComponent } from '../wp/pages/wp-edit/wp-edit.component';
import { WpCreateComponent } from '../wp/pages/wp-create/wp-create.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { ProjectReportViewComponent } from '../reports/pages/project-report-view/project-report-view.component';
import { WpReportViewComponent } from '../reports/pages/wp-report-view/wp-report-view.component';
import { WpReportCreationComponent } from '../reports/pages/wp-report-creation/wp-report-creation.component';
import { WpComponent } from '../wp/component/wp.component';
import { WpManagementComponent } from '../wp/pages/wp-management/wp-management.component';
import { ProjectListSupervisorComponent } from './pages/project-list-supervisor/project-list-supervisor.component';
import { ProjectViewSupervisorComponent } from './pages/project-view-supervisor/project-view-supervisor.component';



const routes: Routes = [
  { path: '', component: ProjectListComponent, data: { breadcrumb: null } },

  { path: 'supervisor/projectlist', component: ProjectListSupervisorComponent, data: { breadcrumb: 'Project List' } },
  { path: 'supervisor/projectlist/view/:projectId', component: ProjectViewSupervisorComponent, data: { breadcrumb: 'Add Project Members' } },

  { path: 'edit/:projectId', component: ProjectEditComponent, data: { breadcrumb: 'Project Edit' } },
  // { path: 'list', component: ProjectListComponent, data: { breadcrumb: 'Project List' } },
  { path: 'creation', component: ProjectCreationComponent, data: { breadcrumb: 'Project Creation' } },
  {
    path: 'view/:projectId',
    component: ProjectManagementComponent,
    data: { breadcrumb: 'Project' },
    runGuardsAndResolvers: 'always',
    children: [
      { path: '', component: EmptyComponent, data: { breadcrumb: null } },
      // { path: 'wp/edit/:wpCode', component: WpEditComponent, data: { breadcrumb: 'Work Package Edit' } },
      // { path: 'wp/creation', component: WpCreateComponent, data: { breadcrumb: 'Work Package Creation' } },
      {
        path: 'wp/editwp/:wpCode/:projectId',
        component: WpManagementComponent,
        data: { breadcrumb: 'Work Package Edit' },
        children: [
          { path: '', component: WpEditComponent, data: { breadcrumb: '' } },
          // { path: 'reports/WorkPackageReport/view/:wpReportId', component: WpReportViewComponent, data: { breadcrumb: 'Work Package Report' } },
        ]
      },
      {
        path: 'wp/createwp/:projectId',
        component: WpCreateComponent,
        data: { breadcrumb: 'Work Package creation' },
        // children: [
        //   { path: '', component: WpCreateComponent, data: { breadcrumb: '' } },
        // ]
      },
      {
        path: 'wp/viewwp/:wpCode/:projectId',
        component: WpManagementComponent,
        data: { breadcrumb: 'Work Package' },
        children: [
          { path: '', component: WpViewComponent, data: { breadcrumb: '' } },
          // { path: 'reports/WorkPackageReport/view/:wpReportId', component: WpReportViewComponent, data: { breadcrumb: 'Work Package Report' } },
        ]
      },

      { path: 'reports/ProjectCostPerformanceReport/view/:projectReportId', component: ProjectReportViewComponent, data: { breadcrumb: 'Project Cost Performance Report' } },
      { path: 'reports/WorkPackageReport/view/:wpReportId', component: WpReportViewComponent, data: { breadcrumb: 'Work Package Report' } },
      { path: 'reports/WorkPackageReport/creation/:wpId/:projectId', component: WpReportCreationComponent, data: { breadcrumb: 'Create Work Package Report' } },

    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forRoot(routes, {
    //   onSameUrlNavigation: 'reload'
    // })
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
