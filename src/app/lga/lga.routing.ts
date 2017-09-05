import { Routes } from '@angular/router';
import { MatchComponent } from "../lga/tree/match.component";

export const LgaRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic',
      component: MatchComponent,
      data: {
        heading: 'Match forms'
      }
    }]
  }
];
