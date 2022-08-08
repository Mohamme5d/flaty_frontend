import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentPaymentsListComponent } from './rent-payments-list/rent-payments-list.component';
import { RentPaymentsCreateComponent } from './rent-payments-create/rent-payments-create.component';
import { RentPaymentsDetailComponent } from './rent-payments-detail/rent-payments-detail.component';
import { RentPaymentsUpdateComponent } from './rent-payments-update/rent-payments-update.component';
import { rent_payment} from './rent-pyments.routing';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RentPaymentsListComponent,
    RentPaymentsCreateComponent,
    RentPaymentsDetailComponent,
    RentPaymentsUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rent_payment),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class RentPaymentsModule { }
