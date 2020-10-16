import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mapTo, mergeMap, pluck, switchMap, tap, toArray} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {Planet} from '../../../core/models /planet';
import {Person} from '../../../core/models /people';
import {StarWarsApiService} from '../services/star-wars-api.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  public planetData$: Observable<{planet: Planet, residents: Person[]}>;
  public planetId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) { }

  ngOnInit(): void {
    this.planetId = this.activatedRoute.snapshot.params?.planetId;

    this.planetData$ = this.starWarsApiService.getPlanet(this.planetId).pipe(
      switchMap((planet: Planet) => this.getResidents(planet.residents).pipe(
        map((residents: Person[]) => ({planet, residents})
      ))
    ));
  }

  public getResidents(residents: string[]): Observable<Person[]> {
    return from(residents).pipe(
      mergeMap((resident: string) => this.starWarsApiService.getResident(resident)),
      toArray(),
    );
  }
}
