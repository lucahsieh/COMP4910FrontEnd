import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';
import { LoginLayoutComponent } from './core/layout/login-layout/login-layout.component';
import { AuthGuard } from './core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'content/dashboard',
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
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./modules/timesheets/timesheets.module').then(m => m.TimesheetsModule)
      },
      {
        path: 'employees',
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'reports',
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
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
