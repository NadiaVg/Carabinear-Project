
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-in-card',
  templateUrl: './sign-in-card.component.html',
  styleUrls: ['./sign-in-card.component.scss'],
})
export class SignInCardComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    private photoService: PhotoService,
    private alertController: AlertController,
    private router: Router) { 
    this.title = ""
  }
  @Input() title: string;

  ionViewWillEnter() {
    this.userForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      CP: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.userForm.controls;
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
      subHeader: 'Usere añadido con éxito',
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




}
