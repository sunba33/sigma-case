import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { provideMockStore } from '@ngrx/store/testing';
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
  it('has form ', () => {
    const form = document.getElementsByTagName('form');
    expect(form).toBeTruthy();
  });

  it('fill item id success', () => {
    component.form.get('itemId').setValue('1');
    expect(component.form.get('itemId').value).toBe('1');
  });

  it('fill item name success', () => {
    component.form.get('itemName').setValue('test');
    expect(component.form.get('itemName').value).toBe('test');
  });

  it('fill item amount success', () => {
    component.form.get('itemAmount').setValue('1');
    expect(component.form.get('itemAmount').value).toBe('1');
  });

  it('fill item price success', () => {
    component.form.get('itemPrice').setValue('1');
    expect(component.form.get('itemPrice').value).toBe('1');
  });


  it('needs all field required', () => {
    const submitButton = document.getElementsByTagName('button')[0];
    submitButton.click();

    expect(component.form.get('itemId').errors.required).toBeTruthy();
  });

  it('successfully send form with all fields are filled', () => {
    component.form.get('itemId').setValue('1');
    component.form.get('itemName').setValue('test');
    component.form.get('itemAmount').setValue('1');
    component.form.get('itemPrice').setValue('1');

    const submitButton = document.getElementsByTagName('button')[0];
    submitButton.click();

    expect(component.form.get('itemId').errors).toBeFalsy();
  });
});
