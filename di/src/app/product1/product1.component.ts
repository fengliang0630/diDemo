import { Component, OnInit } from '@angular/core';
import {Product, Product1Service} from '../shared/product1.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  product: Product;
  constructor(private productService: Product1Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
