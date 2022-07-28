import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { provideMockStore } from '@ngrx/store/testing';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../../stores/cart-store/reducers/cart-store.reducer';
import { productsReducer } from '../../../stores/products/reducers/products.reducer';


describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        StoreModule.forRoot({ cart: cartReducer, products: productsReducer }),],
      declarations: [AdminComponent],
      providers: [
        provideMockStore({ initialState: { products: [], cart: [] } }),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
