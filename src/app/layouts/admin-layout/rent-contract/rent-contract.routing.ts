
import { RentContractDetailComponent } from './rent-contract-detail/rent-contract-detail.component';
import { RentContractCreateComponent } from './rent-contract-create/rent-contract-create.component';
import { RentContractUpdateComponent } from './rent-contract-update/rent-contract-update.component';
import { RentContractListComponent } from './rent-contract-list/rent-contract-list.component';
import { Routes } from '@angular/router';


export const rent_contract: Routes=[
  {path: 'list',component: RentContractListComponent},
  {path: 'update',component: RentContractUpdateComponent},
  {path: 'create',component: RentContractCreateComponent},
  {path: 'detail',component: RentContractDetailComponent},
]