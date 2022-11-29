import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  restaurantForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private photoService: PhotoService,
    private alertController: AlertController,
    private router: Router) { }

  ionViewWillEnter() {
    this.restaurantForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      CP: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.restaurantForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass:'customErrorAlert',
      header: 'Error',
      subHeader: 'Faltan datos',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton'
      }],
    });

    await alert.present();
  }


  async okAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      cssClass:'customOkAlert',
      subHeader: 'Restaurante añadido con éxito',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton',
        handler: () => {
          window.location.reload()
        },
      },{
        text: 'Back to list',
        cssClass: 'alertButton',
        handler: () => {
          this.router.navigate(['/admin-list'])
        },
      },],
    });

    await alert.present();
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.restaurantForm.valid) {
      console.log('Please provide all the required values!')
      this.errorAlert();
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.restaurantService.createRestaurant(this.restaurantForm.value, blob).subscribe(data => {
      this.okAlert();
      })
    }
  }





}


