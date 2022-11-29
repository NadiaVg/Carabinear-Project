import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  restaurants: any = [];
  searchRestaurant: string;
  
  constructor(private restaurantService: RestaurantService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

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


  async deleteAlert(restaurant) {
    const alert = await this.alertController.create({
      cssClass:'customErrorAlert',
      header: '¿Seguro?',
      subHeader: 'Se eliminará el restaurante de forma permanente',
      buttons: [{
        text: 'Eliminar',
        cssClass: 'deleteButton',
        handler: () => {
          console.log(restaurant.id)
          this.restaurantService.deleteRestaurant(restaurant.id)
        }
      },{
        text: 'Cancelar',
        cssClass: 'alertButton',
        handler: () => {
          console.log('si')
        }
      }],
    });

    await alert.present();
  }


  removeRestaurant(restaurant) {
    // this.deleteAlert(restaurant);
    if (window.confirm('Are you sure')) {
      this.restaurantService.deleteRestaurant(restaurant.id)
      .subscribe(() => {
        this.getAllRestaurants();
        console.log('Restaurant deleted!')
      })
    }
  }


}
