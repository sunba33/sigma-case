import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartItemModel } from '../../stores/cart-store/models/cartItem.model';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  cartItems: CartItemModel[] = [];

  private destroyed$: Subject<any> = new Subject();

  constructor(private store: Store,
              private toastr: ToastrService,
              private dialogService: NgbModal,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initListeners();
  }

  initListeners(): void {
    // @ts-ignore
    this.store.select(`cart`)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((cartState: { cart: CartItemModel[] }) => {
        if (cartState) {
          this.cartItems = cartState.cart;
          this.cdr.detectChanges();
        }
      }, (error: any) => {
        this.toastr.error('Beklenmeyen bir hata oluştu lütfen daha sonra tekrar deneyiniz', 'Hata');
      });
  }

  get CartItemCount(): number {
    return this.cartItems.length;
  }

  onClickCart(): void {
    const component = this.dialogService.open(CartComponent, { centered: true });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
