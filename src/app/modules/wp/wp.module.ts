import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WpRoutingModule } from './wp-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { WpComponent } from './component/wp.component';
import { WpListComponent } from './pages/wp-list/wp-list.component';
import { WpCreateComponent } from './pages/wp-create/wp-create.component';
import { WpEditComponent } from './pages/wp-edit/wp-edit.component';
import { WpViewComponent } from './pages/wp-view/wp-view.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { ReportsModule } from '../reports/reports.module';
import { WpManagementComponent } from './pages/wp-management/wp-management.component';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    WpComponent,
    WpListComponent,
    WpCreateComponent,
    WpEditComponent,
    WpViewComponent,
    WpManagementComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    CommonModule,
    //SharedModule,
    FormsModule,
    WpRoutingModule,
    SharedModule,
    ReportsModule,

    //material
    MatButtonToggleModule,

    //primeng
    DropdownModule,
    TableModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    TabViewModule,


    // bootstrap
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    BsDatepickerModule.forRoot(),
    MultiSelectModule,
    ListboxModule,
  ],
  exports: [
    WpComponent,
    WpListComponent,
    WpCreateComponent,
    WpEditComponent,
    WpViewComponent,
    WpManagementComponent
  ]
})
export class WpModule { }
