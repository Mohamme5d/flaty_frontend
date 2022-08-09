import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentsListComponent } from './apartments-list/apartments-list.component';
import { ApartmentsCreateComponent } from './apartments-create/apartments-create.component';
import { ApartmentsDetailComponent } from './apartments-detail/apartments-detail.component';
import { ApartmentsUpdateComponent } from './apartments-update/apartments-update.component';
import { RouterModule } from '@angular/router';
import { ApartmentsRoutes } from './apartments.routing';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    ApartmentsListComponent,
    ApartmentsCreateComponent,
    ApartmentsDetailComponent,
    ApartmentsUpdateComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ApartmentsRoutes),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  
  ]
})
export class ApartmentsModule { }

