import { Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
export const SupplierRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    data: {
      heading: 'Create Supplier',
      removeFooter: true
    }
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      heading: 'List Suppliers',
      removeFooter: true
    }
  }
];
