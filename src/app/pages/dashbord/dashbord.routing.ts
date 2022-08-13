import {  Routes } from "@angular/router";
import { DashbordCreateComponent } from "./dashbord-create/dashbord-create.component";
import { DashbordDetailComponent } from "./dashbord-detail/dashbord-detail.component";
import { DashbordListComponent } from "./dashbord-list/dashbord-list.component";
import { DashbordUpdateComponent } from "./dashbord-update/dashbord-update.component";
 

export const dashbord: Routes=[
    {path: 'list',component: DashbordListComponent},
    {path: 'create',component: DashbordCreateComponent},
    {path: 'update',component: DashbordUpdateComponent},
    {path: 'detail',component: DashbordDetailComponent},
  ]
