import {  Routes } from "@angular/router";
import { BankDepositCreateComponent } from "./bank-deposit-create/bank-deposit-create.component";
import { BankDepositDetailComponent } from "./bank-deposit-detail/bank-deposit-detail.component";
import { BankDepositListComponent } from "./bank-deposit-list/bank-deposit-list.component";
import { BankDepositUpdateComponent } from "./bank-deposit-update/bank-deposit-update.component";
 

export const bank_depoist: Routes=[
    {path: 'list',component: BankDepositListComponent},
    {path: 'create',component: BankDepositCreateComponent},
    {path: 'update',component: BankDepositUpdateComponent},
    {path: 'detail',component: BankDepositDetailComponent},
  ]
