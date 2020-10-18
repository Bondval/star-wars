import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { PlanetResponse, StarWarsApiService } from './services/star-wars-api.service';
import { Planet} from '../../core/models /planet';
import {interval, Observable, ReplaySubject} from 'rxjs';
import {Router, Scroll} from '@angular/router';
import {DashboardService} from './services/dashboard.service';
import {distinctUntilKeyChanged, filter, map, takeUntil, tap} from 'rxjs/operators';
import {ViewportScroller} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Replacement} from 'tslint';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  private ngUnsubscribe: ReplaySubject<number> = new ReplaySubject<number>(1);
  @ViewChild('background') background;
  private scrollPosition: [number, number];

  constructor(
    private router: Router,
    private readonly snackBar: MatSnackBar,
    public dashboardService: DashboardService,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.pipe(
      filter(e => (e instanceof Scroll)),
      takeUntil(this.ngUnsubscribe)
    ).subscribe(e => {
      if ((e as Scroll).position) {
        console.log(e);
        this.scrollPosition = (e as Scroll).position;
      } else {
        this.scrollPosition = [0, 0];
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([this.scrollPosition[0], this.scrollPosition[1] + 1100]);

    interval(50).pipe(
      tap((changesPerSecond) => {
        this.backgroundAnimation(changesPerSecond);
      }),
      takeUntil(this.ngUnsubscribe)
    ).subscribe();
  }

  ngOnInit(): void {
  }

  async onDetailInfo(planetUrl: string): Promise<void> {
    if (planetUrl) {
      const planetId = planetUrl.match('/planets/(.*)/')[1];
      await this.router.navigate(['planet/' + planetId]);
    } else {
      this.snackBar.open("Something went wrong. Planet wasn't found", 'Error', {
        duration: 2000
      });
    }
  }

  public loadMore(): void {
    this.dashboardService.loadNextPage();
  }

  private backgroundAnimation(changesPerSecond: number): void {
    this.background.nativeElement.style.backgroundPositionY = changesPerSecond / 2 + 'px';
    this.background.nativeElement.style.backgroundPositionX = -(changesPerSecond / 4) + 'px';
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
