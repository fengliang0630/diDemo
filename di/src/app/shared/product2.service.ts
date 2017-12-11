import { Injectable } from '@angular/core';
import {Product, Product1Service} from './product1.service';
import {LoggerService} from './logger.service';

@Injectable()
export class Product2Service implements Product1Service{

  getProduct(): Product {
    return new Product(2, '三星7', 400, '最新的三星手机');
  }

  constructor(public logger: LoggerService) { }

}
