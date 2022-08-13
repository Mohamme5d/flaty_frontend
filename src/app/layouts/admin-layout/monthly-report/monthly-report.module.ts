import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyReportListComponent } from './monthly-report-list/monthly-report-list.component';
import { MonthlyReportDetailComponent } from './monthly-report-detail/monthly-report-detail.component';

import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { monthly_report } from './monthly-report.routing';


@NgModule({
  declarations: [
    MonthlyReportListComponent,
    MonthlyReportDetailComponent,
   
  ],
  imports: [
    CommonModule,RouterModule.forRoot(monthly_report),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class MonthlyReportModule { }
