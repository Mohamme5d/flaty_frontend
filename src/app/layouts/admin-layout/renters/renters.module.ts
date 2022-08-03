import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentersListComponent } from './renters-list/renters-list.component';
import { RentersCreateComponent } from './renters-create/renters-create.component';
import { RentersUpdateComponent } from './renters-update/renters-update.component';
import { RentersDetailComponent } from './renters-detail/renters-detail.component';
import {  RouterModule, Routes } from "@angular/router";
import { ClipboardDirective, ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { rentersRoute } from './renters.routing';


@NgModule({
  declarations: [
    RentersListComponent,
    RentersCreateComponent,
    RentersUpdateComponent,
    RentersDetailComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(rentersRoute),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],

})
export class RentersModule { }
