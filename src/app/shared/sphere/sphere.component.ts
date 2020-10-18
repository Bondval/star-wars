import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Planet} from '../../core/models /planet';
import {interval} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss']
})
export class SphereComponent implements OnInit, AfterViewInit {
  @ViewChild('clouds') clouds;
  @ViewChild('background') background;
  @Input() planet: Planet;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const orbitalPeriod = !this.planet.orbital_period || this.planet.orbital_period === 'unknown' ? 0.8 :
      +this.planet.orbital_period / 2000;
    interval(50).pipe(tap((changesPerSecond) => {
      this.cloudsAnimation(changesPerSecond, orbitalPeriod);
      this.backgroundAnimation(changesPerSecond, orbitalPeriod);
    })).subscribe();
  }

  private cloudsAnimation(changesPerSecond: number, orbitalPeriod: number): void {
    this.clouds.nativeElement.style.backgroundPositionX = (changesPerSecond * orbitalPeriod) * 1.2  + 'px';
  }

  private backgroundAnimation(changesPerSecond: number, orbitalPeriod: number): void {
    this.background.nativeElement.style.backgroundPositionX = (changesPerSecond * orbitalPeriod) * 0.9  + 'px';
  }
}
