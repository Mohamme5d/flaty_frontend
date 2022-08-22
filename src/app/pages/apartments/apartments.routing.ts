import { Routes } from '@angular/router';
import { ApartmentsCreateComponent } from './apartments-create/apartments-create.component';
import { ApartmentsDetailComponent } from './apartments-detail/apartments-detail.component';
import { ApartmentsListComponent } from './apartments-list/apartments-list.component';


 

export const ApartmentsRoutes: Routes = [
    { path: 'list',      component: ApartmentsListComponent },
    { path: 'create',   component: ApartmentsCreateComponent },
    { path: 'detail/:id',          component: ApartmentsDetailComponent },
 ];


