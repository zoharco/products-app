import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() editProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  edit(): void {
    if (this.product) 
        this.editProduct.emit(this.product);
  }

  delete() {
    if (this.product) 
        this.deleteProduct.emit(this.product.id);
  }
}
