import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentContractDetailComponent } from './rent-contract-detail/rent-contract-detail.component';
import { RentContractCreateComponent } from './rent-contract-create/rent-contract-create.component';
import { RentContractUpdateComponent } from './rent-contract-update/rent-contract-update.component';
import { RentContractListComponent } from './rent-contract-list/rent-contract-list.component';
import { RouterModule,Routes } from '@angular/router';
import { rent_contract } from './rent-contract.routing'
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 


@NgModule({
  declarations: [
    RentContractListComponent,
    RentContractDetailComponent,
    RentContractCreateComponent,
    RentContractUpdateComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rent_contract),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    //NgSelectModule,
    ReactiveFormsModule,

    
  ]
})
export class RentContractModule { }
