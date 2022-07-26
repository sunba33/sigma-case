import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemModel } from '../../stores/cart-store/models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItemModel;
  @Output() decreaseItem: EventEmitter<any> = new EventEmitter();
  @Output() increaseItem: EventEmitter<any> = new EventEmitter();
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickDecreaseItem(): void {
    this.decreaseItem.emit(this.cartItem);
  }

  onClickIncreaseItem(): void {
    this.increaseItem.emit(this.cartItem);
  }

  onClickDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }
}
