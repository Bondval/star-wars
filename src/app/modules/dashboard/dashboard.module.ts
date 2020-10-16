import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarWarsApiService} from './services/star-wars-api.service';
import {RouterModule} from '@angular/router';
import {PlanetComponent} from './planet/planet.component';
import {CoreModule} from '../../core/core.module';
import {DashboardComponent} from './dashboard.component';
import {HeaderModule} from '../../shared/header/header.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([
        {
          path: '',
          component: DashboardComponent,
        },
        {
          path: 'planet/:planetId',
          component: PlanetComponent,
        }
      ]
    )
  ],
  providers: [
    StarWarsApiService
  ]
})
export class DashboardModule { }
