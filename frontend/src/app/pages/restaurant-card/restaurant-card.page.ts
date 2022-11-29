import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.page.html',
  styleUrls: ['./restaurant-card.page.scss'],
})
export class RestaurantCardPage implements OnInit {

  restaurants: any = [];
  id: any;
  
  constructor(    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router) 
    { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchRestaurant(this.id);
  }

  fetchRestaurant(id) {
    this.restaurantService.getOneRestaurant(this.id).subscribe((restaurants => {
      this.restaurants = restaurants;
    }))
  }

}
