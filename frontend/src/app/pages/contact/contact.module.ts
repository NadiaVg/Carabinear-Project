import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ContactCardComponent } from 'src/app/components/contact-card/contact-card.component';
import { LogoFooterComponent } from 'src/app/components/logo-footer/logo-footer.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    ContactPage
  ]
})
export class ContactPageModule {}
