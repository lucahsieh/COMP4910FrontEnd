import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreationComponent } from './pages/project-creation/project-creation.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';



const routes: Routes = [
  { path: '', component: ProjectListComponent, data: { breadcrumb: null } },
  { path: 'view/:projectId', component: ProjectViewComponent, data: { breadcrumb: 'Project View' } },
  { path: 'edit/:projectId', component: ProjectEditComponent, data: { breadcrumb: 'Project Edit' } },
  { path: 'list', component: ProjectListComponent, data: { breadcrumb: 'Project List' } },
  { path: 'creation', component: ProjectCreationComponent, data: { breadcrumb: 'Project Creation' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule{ }
