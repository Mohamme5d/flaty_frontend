import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
 
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
     { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {
        path: 'apartments',
        loadChildren: () => import('src/app/pages/apartments/apartments.module').then(m => m.ApartmentsModule)
      },
      {
        path: 'renters',
        loadChildren: () => import('src/app/pages/renters/renters.module').then(m => m.RentersModule)
      },

      {
        path: 'bank-deposit',
        loadChildren: () => import('src/app/pages/bank-deposit/bank-deposit.module').then(m => m.BankDepositModule)
      },

      {
        path: 'expenses',
        loadChildren: () => import('src/app/pages/expenses/expenses.module').then(m => m.ExpensesModule)
      },


      {
        path: 'monthly-report',
        loadChildren: () => import('src/app/pages/monthly-report/monthly-report.module').then(m => m.MonthlyReportModule)
      },


      {
        path: 'rent-payments',
        loadChildren: () => import('src/app/pages/rent-payments/rent-payments.module').then(m => m.RentPaymentsModule)
      },

      {
        path: 'rent-contract',
        loadChildren: () => import('src/app/pages/rent-contract/rent-contract.module').then(m => m.RentContractModule)
      },


      


   
      
    

     
];
