import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../../stores/products/actions/products.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.subscribe(r => console.log(r));
    this.initForm();
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
    const formValues = this.form.value;

    const product = {
      id: formValues.itemId,
      amount: formValues.itemAmount,
      price: formValues.itemPrice,
      name: formValues.itemName,
    };

    this.store.dispatch(AddProduct({ product }));
  }
}
