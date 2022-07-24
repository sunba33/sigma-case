import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [NavbarComponent, CartComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
