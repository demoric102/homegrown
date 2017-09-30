import { Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
export const UserRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    data: {
      heading: 'Create User',
      removeFooter: true
    }
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      heading: 'List User',
      removeFooter: true
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      heading: 'View User',
      removeFooter: true
    }
  }
];
