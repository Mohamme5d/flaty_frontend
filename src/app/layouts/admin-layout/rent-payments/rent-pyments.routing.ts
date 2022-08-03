import {  Routes } from "@angular/router";
import { RentPaymentsListComponent } from './rent-payments-list/rent-payments-list.component';
import { RentPaymentsCreateComponent } from './rent-payments-create/rent-payments-create.component';
import { RentPaymentsUpdateComponent } from './rent-payments-update/rent-payments-update.component';
import { RentPaymentsDetailComponent } from './rent-payments-detail/rent-payments-detail.component';
 

export const rent_payment: Routes=[
    {path: 'list',component: RentPaymentsListComponent},
    {path: 'create',component: RentPaymentsCreateComponent},
    {path: 'update',component: RentPaymentsUpdateComponent},
    {path: 'detail',component: RentPaymentsDetailComponent},
  ]
