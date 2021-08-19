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

  editProduct(product: Product): void{
    this.productEdit = product;
  }     

  saveProductDetails(product: Product): void{
    const productIndex = this.products.findIndex(prd => {
        return prd.id === product.id;
    });
    if(typeof productIndex === 'number' )
        this.products.splice(productIndex, 1, product);

    console.log(this.products);
  }
}
