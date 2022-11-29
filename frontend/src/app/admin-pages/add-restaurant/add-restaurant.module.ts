import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantPageRoutingModule } from './add-restaurant-routing.module';

import { AddRestaurantPage } from './add-restaurant.page';
import { AdminMenuComponent } from 'src/app/components/admin-menu/admin-menu.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddRestaurantPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    AddRestaurantPage
  ]
})
export class AddRestaurantPageModule {}
