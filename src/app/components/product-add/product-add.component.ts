import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel: Product = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe((response) => {
        this.toastrService.success(productModel.productName, response.message);
      },errorResponse=>{
        if(errorResponse.error.Errors){
          for (let index = 0; index < errorResponse.error.Errors.length; index++) {
            this.toastrService.error(errorResponse.error.Errors[index].ErrorMessage,errorResponse.error.Errors[index].PropertyName)
           }
        }
        else{
          this.toastrService.error(errorResponse.error.Message)
        }
      });
    } else {
      this.toastrService.error('Your form is invalid', 'Error');
    }
  }
}
