import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarWarsApiService} from './services/star-wars-api.service';
import {RouterModule} from '@angular/router';
import {PlanetComponent} from './planet/planet.component';
import {DashboardComponent} from './dashboard.component';
import {HeaderModule} from '../../shared/header/header.module';
import {SphereModule} from '../../shared/sphere/sphere.module';
import {MatButtonModule} from '@angular/material/button';
import {DashboardService} from './services/dashboard.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LoaderModule} from '../../shared/loader/loader.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SphereModule,
    MatButtonModule,
    MatSnackBarModule,
    LoaderModule,
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
    StarWarsApiService,
    DashboardService
  ]
})
export class DashboardModule { }
