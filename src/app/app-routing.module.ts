import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselViewComponent } from './components/carousel-view/carousel-view.component';
import { FilterComponent } from './components/filter/filter.component';

import { UsersDetailsComponent } from './components/users-details/users-details.component';


const routes: Routes = [
  {path:"users-details",component: UsersDetailsComponent},
  {path:"filter",component: FilterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
