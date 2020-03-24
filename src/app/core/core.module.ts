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
import { AccordionModule } from 'primeng/accordion';

import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastDisplayComponent } from './layout/toast-display/toast-display.component';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent,
    ToastDisplayComponent,
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
    AccordionModule,
    PanelMenuModule,
    ToastModule,
    MessagesModule,
    MessageModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  exports: [
    LoginLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent,
    ToastDisplayComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
