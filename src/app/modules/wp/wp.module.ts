import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WpRoutingModule } from './wp-routing.module';
import { SharedModule } from 'primeng/api/shared';
import { WpComponent } from './pages/wp.component';
import { WpListComponent } from './pages/wp-list/wp-list.component';
import { WpCreateComponent } from './pages/wp-create/wp-create.component';
import { WpEditComponent } from './pages/wp-edit/wp-edit.component';
import { WpViewComponent } from './pages/wp-view/wp-view.component';


@NgModule({
  declarations: [

    WpComponent,

    WpListComponent,

    WpCreateComponent,

    WpEditComponent,

    WpViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WpRoutingModule
  ]
})
export class WpModule { }
