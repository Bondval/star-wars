import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isBackButton = false;
  @Input() maxPageNumber: number;
  @Input() nextPage: string;

  constructor(
    private location: Location
  ) { }

  toPreviousPage(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
