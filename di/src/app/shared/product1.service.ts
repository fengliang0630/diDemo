import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class Product1Service {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log('Product1Service 正在被使用  获取Product数据');
    return new Product(1, 'iphone7', 5999, '最新的苹果手机');
  }
}

export class Product {
  constructor(
    public id: number,
    public title:string,
    public price:number,
    public desc:string
  ) {}
}
