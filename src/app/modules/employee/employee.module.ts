import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './pages/employee.component';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';



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
  ]
})
export class EmployeeModule { }
