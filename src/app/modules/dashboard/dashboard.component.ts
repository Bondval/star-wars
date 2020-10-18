import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { PlanetResponse, StarWarsApiService } from './services/star-wars-api.service';
import { Planet} from '../../core/models /planet';
import {Observable, ReplaySubject} from 'rxjs';
import {Router, Scroll} from '@angular/router';
import {DashboardService} from './services/dashboard.service';
import {distinctUntilKeyChanged, filter, map, takeUntil} from 'rxjs/operators';
import {ViewportScroller} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Replacement} from 'tslint';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  private ngUnsubscribe: ReplaySubject<number> = new ReplaySubject<number>(1);
  @ViewChildren('planets') planets: QueryList<any>;
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

  ngAfterContentInit(): void {
    // console.log(this.dashboard);
    // this.dashboard.nativeElement.scrollTop = this.scrollPosition;
    // this.viewportScroller.scrollToPosition(this.scrollPosition);
  }

  ngAfterViewInit(): void {
    // console.log(this.dashboard);
    // console.log(this.scrollPosition);
    this.viewportScroller.scrollToPosition(this.scrollPosition);
    // console.log(this.scrollPosition);
    // this.planets.changes.subscribe(t => {
    //   console.log('changed');
    //   this.viewportScroller.scrollToPosition(this.scrollPosition);
    // });
  }

  ngOnInit(): void {
  }

  async onDetailInfo(planetUrl: string): Promise<void> {
    if  (planetUrl) {
      const planetId = planetUrl.match('/planets/(.*)/')[1];
      await this.router.navigate(['planet/' + planetId]);
    } else {
      this.snackBar.open("planet wasn't found", 'Error', {
        duration: 2000
      });
    }
  }

  public loadMore(): void {
    console.log('loadMore');
    this.dashboardService.loadNextPage();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
