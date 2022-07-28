import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct, UpdateProduct } from '../../../stores/products/actions/products.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProductModel } from '../../../stores/products/models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  form: FormGroup;
  products: ProductModel[] = [];
  productId: number = null;
  isErrorOccurred = false;
  success = false;
  isUpdate = false;
  errorMessage = '';
  successMessage = '';
  destroyed$: Subject<any> = new Subject<any>();

  constructor(private store: Store, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initListeners();

  }

  initItem(): void {
    if (!this.productId) {
      return;
    }
    const filteredItem = this.products.filter((item: ProductModel) => item.id === this.productId)[0];
    if (!filteredItem) {
      return;
    }

    this.form.get('itemName').setValue(filteredItem.name);
    this.form.get('itemPrice').setValue(filteredItem.price);
    this.form.get('itemId').setValue(filteredItem.id);
    this.form.get('itemAmount').setValue(filteredItem.amount);
    this.form.get('itemId').disable();
    this.isUpdate = true;
  }

  initListeners(): void {
    this.store.select((state: any) => state.products)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.products = res.products;
        console.log(this.products);
      });

    this.router.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => {
        this.productId = params.id;
        this.initItem();
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

    if ((this.products.find((item) => item.id === product.id)) && !this.isUpdate) {
      this.errorMessage = 'Eklemeye çalıştığınız ürün idsi ile bir ürün zaten ekli.';
      this.isErrorOccurred = true;
      return;
    }
    if (this.isUpdate && !this.success) {
      product.id = this.productId;
      this.store.dispatch(UpdateProduct({ product }));
      this.success = true;
      this.successMessage = 'Ürün başarıyla güncellendi.';
      return;
    }

    this.successMessage = 'Ürün başarıyla eklendi.';
    this.store.dispatch(AddProduct({ product }));
    this.isErrorOccurred = false;
    this.success = true;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
