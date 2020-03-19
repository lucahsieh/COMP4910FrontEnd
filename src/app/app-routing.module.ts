import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';
import { LoginLayoutComponent } from './core/layout/login-layout/login-layout.component';
import { AuthGuard } from './core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'content/dashboard',  //change this to content/dashboard if needed
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'home'
    },
    pathMatch: 'full'
  },
  {
    path: 'content',
    data: {
      breadcrumb: 'content'
    },
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'timesheets',
        data: { breadcrumb: 'timesheet list' },
        loadChildren: () => import('./modules/timesheets/timesheets.module').then(m => m.TimesheetsModule)
      },
      {
        path: 'employees',
        data: { breadcrumb: 'employee list' },
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'projects',
        data: {breadcrumb: 'some breadcrumb'},
        loadChildren: () => import('./modules/projects/projects.module')
            .then(p => p.ProjectsModule)
      },
      {
        path: 'reports',
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'wp',
        data: { breadcrumb: 'work package list' },
        loadChildren: () => import('./modules/wp/wp.module').then(m => m.WpModule)
      },
    ]
  },
  // {
  // path: '',
  // component: ContentLayoutComponent,
  // canActivate: [AuthGuard],
  // children: [
  //   {
  //     path: 'cities',
  //     loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  //   },
  //   {
  //     path: 'employee',
  //     loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
  //   },
  // ]
  // },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // // Fallback when no prior routes is matched
  // { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
