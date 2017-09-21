import { Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
import { ChooseComponent } from "./choose/choose.component";

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
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      heading: 'View Supplier',
      removeFooter: true
    }
  }
  ,
  {
    path: 'choose',
    component: ChooseComponent,
    data: {
      heading: 'Choose Supplier',
      removeFooter: true
    }
  }
];
