import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  usersList:any=[];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ApplyFilter(){
    console.log("hii");
    this.router.navigate(["/carousel"]);
  }
}
