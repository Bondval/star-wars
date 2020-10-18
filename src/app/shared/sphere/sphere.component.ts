import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Planet} from '../../core/models /planet';
import {interval, ReplaySubject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SphereComponent implements OnDestroy, AfterViewInit {
  private ngUnsubscribe: ReplaySubject<number> = new ReplaySubject<number>(1);
  @ViewChild('clouds') clouds;
  @ViewChild('background') background;
  @Input() planet: Planet;

  ngAfterViewInit(): void {
    const orbitalPeriod = !this.planet.orbital_period || this.planet.orbital_period === 'unknown' || this.planet.orbital_period === '0'
      ? 0.8 : +this.planet.orbital_period / 2000;
    interval(50).pipe(
      tap((changesPerSecond) => {
        this.cloudsAnimation(changesPerSecond, orbitalPeriod);
        this.backgroundAnimation(changesPerSecond, orbitalPeriod);
      }),
      takeUntil(this.ngUnsubscribe)
    ).subscribe();
  }

  private cloudsAnimation(changesPerSecond: number, orbitalPeriod: number): void {
    this.clouds.nativeElement.style.backgroundPositionX = (changesPerSecond * orbitalPeriod) * 1.2  + 'px';
  }

  private backgroundAnimation(changesPerSecond: number, orbitalPeriod: number): void {
    this.background.nativeElement.style.backgroundPositionX = (changesPerSecond * orbitalPeriod) * 0.9  + 'px';
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
