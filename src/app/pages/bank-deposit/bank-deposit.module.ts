import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDepositListComponent } from './bank-deposit-list/bank-deposit-list.component';
import { BankDepositDetailComponent } from './bank-deposit-detail/bank-deposit-detail.component';
import { BankDepositCreateComponent } from './bank-deposit-create/bank-deposit-create.component';
import { BankDepositUpdateComponent } from './bank-deposit-update/bank-deposit-update.component';
import { bank_depoist} from './bank-deposit.routing';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    BankDepositListComponent,
    BankDepositDetailComponent,
    BankDepositCreateComponent,
    BankDepositUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bank_depoist),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ]
})
export class BankDepositModule { }
