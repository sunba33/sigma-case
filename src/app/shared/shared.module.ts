import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
    declarations: [NavbarComponent, CartComponent, CartItemComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
