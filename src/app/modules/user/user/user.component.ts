import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ProductModel } from '../../../stores/products/models/product.model';
import { CartAdd } from '../../../stores/cart-store/actions/cart-store.actions';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  products: ProductModel[] = [];
  destroy$: Subject<any> = new Subject<any>();

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.initListeners();
  }

  initListeners(): void {
    this.store
      .select((state: any) => state.products)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: { products: ProductModel[] }) => {
        this.products = products.products;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddToCart(product: ProductModel): void {
    this.store.dispatch(CartAdd({ cartItem: product }));
  }

  onEditProduct(product: ProductModel): void {
    this.router.navigate(['/admin/addProduct', product.id]);
  }
}
