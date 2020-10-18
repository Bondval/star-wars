import { ApiService } from '../../../core/services/api.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Person} from '../../../core/models /people';
import {Planet} from '../../../core/models /planet';

export interface PlanetResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

@Injectable()
export class StarWarsApiService {

  constructor(
    private apiService: ApiService,
  ) { }

  public getPlanets(planetsUrl?: string): Observable<PlanetResponse> {
    return this.apiService.get(planetsUrl ?  `planets?page=${+(new URL(planetsUrl).searchParams.get('page'))}` : `planets?page=1`);
  }

  public getPlanet(id: string): Observable<Planet> {
    return this.apiService.get(`planets/${id}`);
  }

  public getResident(residentUrl: string): Observable<Person> {
    return this.apiService.get(residentUrl);
  }
}
