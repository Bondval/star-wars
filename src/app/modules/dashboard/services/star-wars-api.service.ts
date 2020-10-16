import { ApiService } from '../../../core/services/api.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Person} from '../../../core/models /people';
import {Planet} from '../../../core/models /planet';

@Injectable()
export class StarWarsApiService {

  constructor(
    private apiService: ApiService,
  ) { }

  public getPlanets(): Observable<Planet[]> {
    return this.apiService.get('planets');
  }

  public getPlanet(id: string): Observable<Planet> {
    return this.apiService.get(`planets/${id}`);
  }

  public getResident(residentUrl: string): Observable<Person> {
    return this.apiService.get(residentUrl);
  }
}
