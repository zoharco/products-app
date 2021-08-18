import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/models';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() saveProductDetails = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  saveDetails(): void {
        
      this.saveProductDetails.emit(this.product);
  }
}
