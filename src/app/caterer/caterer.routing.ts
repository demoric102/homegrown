import { Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
export const CatererRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    data: {
      heading: 'Create Caterer',
      removeFooter: true
    }
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      heading: 'List Caterer',
      removeFooter: true
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      heading: 'View Caterer',
      removeFooter: true
    }
  }
];
