import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports.component';
import { WpReportCreationComponent } from './pages/wp-report-creation/wp-report-creation.component';
import { WpReportComponent } from './component/wp-report/wp-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule, AlertModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WpReportViewComponent } from './pages/wp-report-view/wp-report-view.component';
import { TableModule } from 'primeng/table';
import { WpReportStepperCreationComponent } from './component/wp-report-stepper-creation/wp-report-stepper-creation.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { ProjectReportListComponent } from './pages/project-report-list/project-report-list.component';
import { ProjectReportViewComponent } from './pages/project-report-view/project-report-view.component';
import { ProjectReportPmViewComponent } from './component/project-report-pm-view/project-report-pm-view.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [ReportsComponent, WpReportCreationComponent, WpReportComponent, WpReportViewComponent, WpReportStepperCreationComponent, ProjectReportListComponent, ProjectReportViewComponent, ProjectReportPmViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReportsRoutingModule,
    ReactiveFormsModule,

    //material
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    //primeng
    TableModule,

    // bootstrap
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    NgbModule,
  ]
})
export class ReportsModule { }
