import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentersListComponent } from './renters-list/renters-list.component';
import { RentersCreateComponent } from './renters-create/renters-create.component';
import { RentersUpdateComponent } from './renters-update/renters-update.component';
import { RentersDetailComponent } from './renters-detail/renters-detail.component';
import {  RouterModule, Routes } from "@angular/router";


const rentersRoute: Routes=[
  {path: 'list',component: RentersListComponent},
  {path: 'create',component: RentersCreateComponent},
  {path: 'update',component: RentersUpdateComponent},
  {path: 'detail',component: RentersDetailComponent},
]

@NgModule({
  declarations: [
    RentersListComponent,
    RentersCreateComponent,
    RentersUpdateComponent,
    RentersDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(rentersRoute)
  ]
})
export class RentersModule { }
