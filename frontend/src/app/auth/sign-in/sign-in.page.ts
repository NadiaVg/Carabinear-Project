import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {



  constructor(private router: Router, private authService: AuthService) {
    this.title = ""
  }
  @Input() title: string;



  ngOnInit() {

  }

  register(form) {
    let user: User = {
      id: null,
      email: form.value.email,
      password: form.value.password,
      name: form.value.name,
      CP: form.value.CP,
      admin: false
    };
    this.authService.register(user).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

 
}
