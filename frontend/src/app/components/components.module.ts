import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";

import { AdminMenuComponent } from "./admin-menu/admin-menu.component";
import { ButtonComponent } from "./button/button.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { HomeCardComponent } from "./home-card/home-card.component";
import { ListCardComponent } from "./list-card/list-card.component";
import { LogoFooterComponent } from "./logo-footer/logo-footer.component";
import { MenuComponent } from "./menu/menu.component";
import { QuestionsCardComponent } from "./questions-card/questions-card.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";




const components = [
    AdminMenuComponent,
    ButtonComponent,
    ContactComponent,
    ContactCardComponent,
    HomeCardComponent,
    ListCardComponent,
    LogoFooterComponent,
    MenuComponent,
    QuestionsCardComponent
]

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    declarations: components,
    exports: components
})

export class ComponentsModule {}
