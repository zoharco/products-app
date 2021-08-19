import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../models/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() selectedProduct: Product | undefined;
  @Output() saveProductDetails = new EventEmitter<Product>();
  editProductForm?: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createProductDetailsForm();
  }

  createProductDetailsForm(): void {
    this.submitted = false;
    this.editProductForm = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
    }) as FormGroup;
  }

  updateEditProductForm()
  {
    // this.editProductForm?.patchValue({name: this.selectedProduct?.name, description: this.selectedProduct?.description, price: this.selectedProduct?.price});
    if(this.selectedProduct)
        this.editProductForm?.patchValue(this.selectedProduct);
  }
  saveDetails(): void {
    this.saveProductDetails.emit(this.selectedProduct);
  }

  ngOnChanges() {
    this.clearForm();
    this.updateEditProductForm();
  }

  clearForm() {
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    this.selectedProduct = { ...this.selectedProduct, ...this.editProductForm?.value };
    this.saveProductDetails.emit(this.selectedProduct);
    this.selectedProduct = undefined;
  }
}
