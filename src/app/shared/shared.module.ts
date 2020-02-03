import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [MessageComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
