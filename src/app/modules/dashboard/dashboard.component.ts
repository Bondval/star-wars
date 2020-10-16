import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from './services/star-wars-api.service';
import { Planet} from '../../core/models /planet';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public planets$: Observable<Planet[]>;

  constructor(
    private router: Router,
    private starWarsApiService: StarWarsApiService
  ) { }

  ngOnInit(): void {
    this.planets$ = this.starWarsApiService.getPlanets().pipe(pluck('results'));
  }

  async onDetailInfo(planetUrl: string): Promise<void> {
    if  (planetUrl) {
      const planetId = planetUrl.match('/planets/(.*)/')[1];
      await this.router.navigate(['planet/' + planetId]);
    } else {
      // TODO
    }
  }

}
