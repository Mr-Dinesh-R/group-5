import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  formFlag="carousel"
  constructor() { }

  ngOnInit(): void {
  }
expand(){
  this.formFlag="users"
}
EditFilter(){
  this.formFlag="filter"
}
}