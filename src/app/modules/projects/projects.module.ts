import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCreationComponent } from './pages/project-creation/project-creation.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ProjectComponent } from './components/project/project.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AlertModule } from 'ngx-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { SelectItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
    declarations: [ProjectCreationComponent, ProjectEditComponent, ProjectListComponent, ProjectViewComponent, ProjectComponent],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        FormsModule,
        SharedModule,

        //material
        MatButtonToggleModule,

        //primeng
        DropdownModule,
        TableModule,
        CalendarModule,
        ListboxModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MultiSelectModule,


        // bootstrap
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        NgbModule,
        BsDatepickerModule.forRoot(),
    ]
})

export class ProjectsModule { }