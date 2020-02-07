import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuModule } from 'primeng/menu';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // app
    SharedModule,

    // material
    MatSidenavModule,
    MatToolbarModule,

    // primeng
    MenuModule,
  ],
  exports: [
    LoginLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
