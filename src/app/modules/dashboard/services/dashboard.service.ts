import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {PlanetResponse, StarWarsApiService} from './star-wars-api.service';
import {Planet} from '../../../core/models /planet';

@Injectable()
export class DashboardService {
  private planets: BehaviorSubject<string> = new BehaviorSubject<string>('init');
  public planetsData: Planet[];

  public nextPage: string;
  public maxPageNumber: number;

  constructor(private starWarsApiService: StarWarsApiService) {
    this.planets.pipe(
      switchMap((type: string) => {
        const pageUrl = type === 'next' && this.nextPage ? this.nextPage : '';
        return this.getPlanets(pageUrl);
      }),
    ).subscribe();
  }

  private getPlanets(pageUrl: string): Observable<Planet[]>{
    return this.starWarsApiService.getPlanets(pageUrl).pipe(
      map((response: PlanetResponse) => {
        this.maxPageNumber = response.count / 10;
        this.nextPage = response.next ? response.next : '';
        Array.isArray(this.planetsData) ?
          this.planetsData = [...this.planetsData, ...response.results] :
          this.planetsData = response.results;

        return response.results;
      }),
    );
  }

  public loadNextPage(): void {
    this.planets.next('next');
  }
}
