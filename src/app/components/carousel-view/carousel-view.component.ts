import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  empObjs=[{  
    empno:101,
    ename:"Dhanush",
    job:" ENGINEER",
    sal:65000,
    deptno:20
  },
  {empno:102,
    ename:"Damu",
    job:" MANAGER",
    sal:64000,
    deptno:20},

    {empno:103,
      ename:"Naveen",
      job:" CLERK",
      sal:45000,
      deptno:20},
      {empno:104,
        ename:"Priya",
        job:" SOFTWARE ENGINEER",
        sal:50000,
        deptno:20},
       {empno:105,
          ename:"Divya",
          job:" ENGINEER",
          sal:70000,
          deptno:20},
          // {empno:105,
          //   ename:"Divya",
          //   job:" ENGINEER",
          //   sal:70000,
          //   deptno:20},
          //   {empno:105,
          //     ename:"Divya",
          //     job:" ENGINEER",
          //     sal:70000,
          //     deptno:20},
          //     {empno:105,
          //       ename:"Divya",
          //       job:" ENGINEER",
          //       sal:70000,
          //       deptno:20},
          //       {empno:105,
          //         ename:"Divya",
          //         job:" ENGINEER",
          //         sal:70000,
          //         deptno:20},
          //         {empno:105,
          //           ename:"Divya",
          //           job:" ENGINEER",
          //           sal:70000,
          //           deptno:20}
          
]
EditFilter(){
  this.router.navigate(["/filter"])
}
expand(){
  
}
}
