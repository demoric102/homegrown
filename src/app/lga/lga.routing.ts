import { Routes } from '@angular/router';
import { MatchComponent } from "./match/match.component";
export const LgaRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'match',
      component: MatchComponent,
      data: {
        heading: 'Match LGA - Zone'
      }
    }]
  }
];
