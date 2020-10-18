import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, map, mapTo, mergeMap, pluck, switchMap, tap, toArray} from 'rxjs/operators';
import {from, Observable, of, Subject, throwError} from 'rxjs';
import {Planet} from '../../../core/models /planet';
import {Person} from '../../../core/models /people';
import {StarWarsApiService} from '../services/star-wars-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  public planetData$: Observable<{planet: Planet, residents: Person[]}>;
  public loadingError$ = new Subject<boolean>();
  public planetId: string;

  constructor(
    private readonly snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) { }

  ngOnInit(): void {
    this.planetId = this.activatedRoute.snapshot.params?.planetId;

    this.planetData$ = this.starWarsApiService.getPlanet(this.planetId).pipe(
      catchError((e) => {
        this.snackBar.open("Something went wrong. Planet or Residents wasn't found", 'Error', {
          duration: 2000
        });
        this.loadingError$.next(true);
        return throwError(e);
      }),
      switchMap((planet: Planet) => {
        return this.getResidents(planet.residents).pipe(
          map((residents: Person[]) => ({planet, residents})));
      },
    ),
    );
  }

  public getResidents(residents: string[]): Observable<Person[]> {
    return from(residents).pipe(
      mergeMap((resident: string) => this.starWarsApiService.getResident(resident)),
      catchError((e) => {
        this.snackBar.open("Something went wrong. Planet or Residents wasn't found", 'Error', {
          duration: 2000
        });
        this.loadingError$.next(true);
        return throwError(e);
      }),
      toArray(),
    );
  }
}
