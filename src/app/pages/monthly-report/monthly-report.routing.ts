import {  Routes } from "@angular/router";

import { MonthlyReportDetailComponent } from "./monthly-report-detail/monthly-report-detail.component";
import { MonthlyReportListComponent } from "./monthly-report-list/monthly-report-list.component";

 


export const monthly_report: Routes=[
    {path: 'list',component: MonthlyReportListComponent},
    {path: 'detail/:{month}/:{year}',component: MonthlyReportDetailComponent},
  ]
