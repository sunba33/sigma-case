import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../../stores/products/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickAddProductToCard(): void {
    this.addToCart.emit(this.product);
  }
}
