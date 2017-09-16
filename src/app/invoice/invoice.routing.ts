import { Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

export const InvoiceRoutes: Routes = [
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
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      heading: 'View Supplier',
      removeFooter: true
    }
  }
];
