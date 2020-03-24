import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AlertModule } from 'ngx-bootstrap';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeViewComponent } from './pages/employee-view/employee-view.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeCreationComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    EmployeeEditComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    SharedModule,


    //material
    MatButtonToggleModule,

    //primeng
    DropdownModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,

    ToastModule,
    MessagesModule,
    MessageModule,

    // bootstrap
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
  ],

})
export class EmployeeModule { }
