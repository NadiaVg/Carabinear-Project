import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  restaurants: any = [];

  constructor( private restaurantService: RestaurantService, private router: Router) {
    
   }

  ngOnInit() {}


  ionViewDidEnter(){
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
    })
  }

  
  addRestaurant(){
    this.router.navigateByUrl("/add-restaurant");
  }


  removeRestaurant(restaurant) {
    if (window.confirm('Are you sure')) {
      this.restaurantService.deleteRestaurant(restaurant.id)
      .subscribe(() => {
        this.getAllRestaurants();
        console.log('Restaurant deleted!')
      })
    }
  }

}
