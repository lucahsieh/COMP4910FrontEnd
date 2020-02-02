import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';


@NgModule({
  declarations: [HomeComponent, ListItemComponent, ListDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
