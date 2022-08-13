import {  Routes } from "@angular/router";
import { ExpensesCreateComponent } from "./expenses-create/expenses-create.component";
import { ExpensesDetailComponent } from "./expenses-detail/expenses-detail.component";
import { ExpensesListComponent } from "./expenses-list/expenses-list.component";
import { ExpensesUpdateComponent } from "./expenses-update/expenses-update.component";
 

export const expenses: Routes=[
    {path: 'list',component: ExpensesListComponent},
    {path: 'create',component: ExpensesCreateComponent},
    {path: 'update',component: ExpensesUpdateComponent},
    {path: 'detail',component: ExpensesDetailComponent},
  ]
