import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WpRoutingModule } from './wp-routing.module';
import { SharedModule } from 'primeng/api/shared';
import { WpComponent } from './pages/wp.component';


@NgModule({
  declarations: [

    WpComponent],
  imports: [
    CommonModule,
    SharedModule,
    WpRoutingModule
  ]
})
export class WpModule { }
