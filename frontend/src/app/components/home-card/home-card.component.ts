import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {


  restaurant: any = [];

  constructor(private restaurantService: RestaurantService) { 

  this.getRestaurant();

  }
getRestaurant(){
      this.restaurantService.getOneRestaurant(10).subscribe(data =>{
        this.restaurant.push(data);
        console.log(this.restaurant)
      })
    }

  ngOnInit() {}

 
} 

