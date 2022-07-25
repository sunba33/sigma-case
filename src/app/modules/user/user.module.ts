import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [UserComponent, ProductCardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
