import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpensesDetailComponent } from './expenses-detail/expenses-detail.component';
import { ExpensesUpdateComponent } from './expenses-update/expenses-update.component';
import { ExpensesCreateComponent } from './expenses-create/expenses-create.component';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { expenses } from './expenses.routing'


@NgModule({
  declarations: [
    ExpensesListComponent,
    ExpensesDetailComponent,
    ExpensesUpdateComponent,
    ExpensesCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(expenses),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class ExpensesModule { }
