import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports.component';
import { WpReportCreationComponent } from './pages/wp-report-creation/wp-report-creation.component';
import { WpReportComponent } from './component/wp-report/wp-report.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule, AlertModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WpReportViewComponent } from './pages/wp-report-view/wp-report-view.component';


@NgModule({
  declarations: [ReportsComponent, WpReportCreationComponent, WpReportComponent, WpReportViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReportsRoutingModule,


    //material

    //primeng

    // bootstrap
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule,
  ]
})
export class ReportsModule { }
