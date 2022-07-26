import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { CartItemModel } from '../../stores/cart-store/models/cartItem.model';
import { takeUntil } from 'rxjs/operators';
import { DecreaseItem, IncreaseItem, RemoveOneItem } from '../../stores/cart-store/actions/cart-store.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: CartItemModel[];
  destroyed$: Subject<any> = new Subject();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initProductsOnCart();
  }


  initProductsOnCart(): void {

    this.store
      .select((state: any) => state.cart)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((store: { cart: CartItemModel[] }) => {
        this.cartItems = store.cart;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onIncreaseItem(item: any): void {
    this.store.dispatch(IncreaseItem({ id: item.id }));
  }

  onDecreaseItem(item: any): void {
    if (item.amount > 1) {
      this.store.dispatch(DecreaseItem({ id: item.id }));
      return;
    }
    this.store.dispatch(RemoveOneItem({ id: item.id }));
  }

  onDeleteItem(item: any): void {
    this.store.dispatch(RemoveOneItem({ id: item.id }));
  }
}
