import { RentersListComponent } from './renters-list/renters-list.component';
import { RentersCreateComponent } from './renters-create/renters-create.component';
import { RentersUpdateComponent } from './renters-update/renters-update.component';
import { RentersDetailComponent } from './renters-detail/renters-detail.component';
import {  Routes } from "@angular/router";
 

export const rentersRoute: Routes=[
    {path: 'list',component: RentersListComponent},
    {path: 'create',component: RentersCreateComponent},
    {path: 'update',component: RentersUpdateComponent},
    {path: 'detail',component: RentersDetailComponent},
  ]
