import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../../stores/products/actions/products.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProductModel } from '../../../stores/products/models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  form: FormGroup;
  products: ProductModel[] = [];
  isErrorOccurred = false;
  errorMessage = '';
  destroyed$: Subject<any> = new Subject<any>();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initListeners();
  }

  initListeners(): void {
    this.store.select((state: any) => state.products)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.products = res.products;
        console.log(this.products);
      });
  }

  initForm(): void {
    this.form = new FormGroup({
      itemName: new FormControl(null, [Validators.required]),
      itemAmount: new FormControl(null, [Validators.required]),
      itemPrice: new FormControl(null, [Validators.required]),
      itemId: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.errorMessage = 'Lütfen formdaki tüm alanları doldurun.';
      this.isErrorOccurred = true;
      return;
    }


    const formValues = this.form.value;

    const product = {
      id: formValues.itemId,
      amount: formValues.itemAmount,
      price: formValues.itemPrice,
      name: formValues.itemName,
    };

    if (this.products.find((item) => item.id === product.id)) {
      this.errorMessage = 'Eklemeye çalıştığınız ürün idsi ile bir ürün zaten ekli.';
      this.isErrorOccurred = true;
      return;
    }
    this.isErrorOccurred = false;

    this.store.dispatch(AddProduct({ product }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
