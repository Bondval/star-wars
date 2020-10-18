import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SphereComponent } from './sphere.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SphereComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SphereComponent
  ]
})
export class SphereModule { }
