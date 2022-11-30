import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantCardPage } from './restaurant-card.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantCardPageRoutingModule {}
