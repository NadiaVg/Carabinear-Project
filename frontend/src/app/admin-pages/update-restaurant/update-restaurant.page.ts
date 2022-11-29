import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.page.html',
  styleUrls: ['./update-restaurant.page.scss'],
})
export class UpdateRestaurantPage implements OnInit {

  id: any;
  restaurantForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchRestaurant(this.id);
    this.restaurantForm = this.formBuilder.group({
      name: [''],
      category: [''],
      direction: [''],
      CP: ['']
    })
  }

  fetchRestaurant(id: number) {
    this.restaurantService.getOneRestaurant(id).subscribe((data => {
      this.restaurantForm.setValue({
        name: data['name'],
        direction: data['direction'],
        CP: data['CP'],
        category: data['category'],
      })
    }))
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.restaurantForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }
      console.log(blob)
      this.restaurantService.updateRestaurant(this.id, this.restaurantForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/admin-list");
      })
    }
  }

  get errorControl() {
    return this.restaurantForm.controls;
  }

  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }
}
