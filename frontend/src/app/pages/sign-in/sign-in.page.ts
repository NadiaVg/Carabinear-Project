import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {



  constructor() {
    this.title = ""
  }
  @Input() title: string;



  ngOnInit() {

  }

 
}
