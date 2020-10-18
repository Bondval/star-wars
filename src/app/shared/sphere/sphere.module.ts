import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SphereComponent } from './sphere.component';

@NgModule({
  declarations: [SphereComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SphereComponent
  ]
})
export class SphereModule { }
