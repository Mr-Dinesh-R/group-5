import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  formFlag="users"
  constructor() { }

  ngOnInit(): void {
  }
  closeDetail(){
    
  }

}