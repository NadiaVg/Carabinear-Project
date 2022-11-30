import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantCardPageRoutingModule } from './restaurant-card-routing.module';

import { RestaurantCardPage } from './restaurant-card.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantCardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RestaurantCardPage]
})
export class RestaurantCardPageModule {}
