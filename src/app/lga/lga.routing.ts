import { Routes } from '@angular/router';
import { BasicComponent } from "../form/basic/basic.component";

export const LgaRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic',
      component: BasicComponent,
      data: {
        heading: 'Basic forms'
      }
    }]
  }
];
