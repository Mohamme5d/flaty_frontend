import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordListComponent } from './dashbord-list/dashbord-list.component';
import { DashbordDetailComponent } from './dashbord-detail/dashbord-detail.component';
import { DashbordUpdateComponent } from './dashbord-update/dashbord-update.component';
import { DashbordCreateComponent } from './dashbord-create/dashbord-create.component';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { dashbord } from './dashbord.routing';


@NgModule({
  declarations: [
    DashbordListComponent,
    DashbordDetailComponent,
    DashbordUpdateComponent,
    DashbordCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(dashbord),
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class DashbordModule { }
