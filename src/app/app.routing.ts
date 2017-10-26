import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuardService } from './guard/auth-guard';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [ AuthGuardService ]
  }, {
    path: 'supplier',
    loadChildren: './supplier/supplier.module#SupplierModule'
  }, { 
    path: 'caterer',
    loadChildren: './caterer/caterer.module#CatererModule'
  },
  { 
    path: 'zone',
    loadChildren: './zone/zone.module#ZoneModule'
  },
  { 
    path: 'invoice',
    loadChildren: './invoice/invoice.module#InvoiceModule'
  },
  { 
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  { 
    path: 'fooditem',
    loadChildren: './fooditem/fooditem.module#FooditemModule'
  },{
    path: 'lga',
    loadChildren: './lga/lga.module#LgaModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

