import {Routes} from '@angular/router';
import {PlanetComponent} from './modules/dashboard/planet/planet.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'planet/:planetId',
    component: PlanetComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
