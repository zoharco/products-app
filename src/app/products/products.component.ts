import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productEdit?: Product;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(): void{
    this.productsService.getProducts()
        .subscribe(products => this.products = products);
  }

  deleteProduct(productid: number): void{
    this.products = this.products.filter(product => product.id !== productid);
  }

  editProduct(productId: number): void{
    this.productEdit = this.products.find(prd => prd.id === productId);
  }

  saveProductDetails(product: Product){
    this.products = this.products.map(prd => {
        if(prd.id === product.id)
            prd = product;
        return prd;
    });
  }
}
