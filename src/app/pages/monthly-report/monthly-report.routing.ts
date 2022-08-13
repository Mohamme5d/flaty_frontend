import {  Routes } from "@angular/router";
import { MonthlyReportCreateComponent } from "./monthly-report-create/monthly-report-create.component";
import { MonthlyReportDetailComponent } from "./monthly-report-detail/monthly-report-detail.component";
import { MonthlyReportListComponent } from "./monthly-report-list/monthly-report-list.component";
import { MonthlyReportUpdateComponent } from "./monthly-report-update/monthly-report-update.component";
 


export const monthly_report: Routes=[
    {path: 'list',component: MonthlyReportListComponent},
    {path: 'create',component: MonthlyReportCreateComponent},
    {path: 'update',component: MonthlyReportUpdateComponent},
    {path: 'detail',component: MonthlyReportDetailComponent},
  ]
