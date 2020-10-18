import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, ReplaySubject, throwError} from 'rxjs';
import {catchError, map, mapTo, switchMap, takeUntil, tap} from 'rxjs/operators';
import {PlanetResponse, StarWarsApiService} from './star-wars-api.service';
import {Planet} from '../../../core/models /planet';

@Injectable()
export class DashboardService implements OnDestroy{
  private ngUnsubscribe: ReplaySubject<number> = new ReplaySubject<number>(1);
  private planets: BehaviorSubject<string> = new BehaviorSubject<string>('init');
  public planetsData: Planet[];

  public nextPage: string;
  public currentPage = 1;
  public maxPageNumber: number;
  public isLoading = true;

  constructor(private starWarsApiService: StarWarsApiService) {
    this.planets.pipe(
      switchMap((type: string) => {
        const pageUrl = type === 'next' && this.nextPage ? this.nextPage : '';
        return this.getPlanets(pageUrl).pipe(
          catchError((e) => {
            this.isLoading = false;
            return of(e);
          }),
        );
      }),
      takeUntil(this.ngUnsubscribe)
    ).subscribe(() => this.isLoading = false);
  }

  private getPlanets(pageUrl: string): Observable<Planet[]>{
    return this.starWarsApiService.getPlanets(pageUrl).pipe(
      map((response: PlanetResponse) => {
        this.maxPageNumber = response.count / 10;

        this.currentPage = (response.next ? +(new URL(response.next).searchParams.get('page')) - 1 :
          this.currentPage && this.currentPage !== 1 ? this.currentPage + 1 : 1);

        this.nextPage = response.next ? response.next : '';

        Array.isArray(this.planetsData) ?
          this.planetsData = [...this.planetsData, ...response.results] :
          this.planetsData = response.results;

        return response.results;
      }),
    );
  }

  public loadNextPage(): void {
    this.isLoading = true;
    this.planets.next('next');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
