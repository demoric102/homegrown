import { Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { MatchComponent } from "./match/match.component";
export const ZoneRoutes: Routes = [
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
    path: 'match',
    component: MatchComponent,
    data: {
      heading: 'Match Zone',
      removeFooter: true
    }
  }

];
