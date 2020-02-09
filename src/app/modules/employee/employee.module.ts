import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './pages/employee.component';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AlertModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [EmployeeComponent, EmployeeCreationComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,

    //material
    MatButtonToggleModule,

    //primeng
    DropdownModule,

    // bootstrap
    AlertModule.forRoot(),
  ]
})
export class EmployeeModule { }
