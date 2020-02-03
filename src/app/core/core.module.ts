import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // material
    MatSidenavModule,
    MatToolbarModule,

    // primeng
    BreadcrumbModule,
    MenuModule,
  ],
  exports: [
    LoginLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent,
    BreadcrumbComponent
  ],
  providers: [
  ]
})
export class CoreModule { }
