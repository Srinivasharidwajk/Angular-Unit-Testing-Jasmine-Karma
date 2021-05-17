import { Component, OnInit } from '@angular/core';
import {IProduct} from './IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public title:string = 'Welcome to Product Item';
  public product:IProduct = {
    sno : '01AAC02',
    name : 'Smart Watch',
    image : 'https://images-na.ssl-images-amazon.com/images/I/61OUIIXnPqL._AC_SX569_.jpg',
    qty : 2,
    price : 1850
  }

  constructor() { }

  ngOnInit(): void {
  }

  public clickIncrQty(e){
    this.product = {
      ...this.product,
      qty : this.product.qty + 1
    }
  }

  public clickDecrQty(e){
    this.product = {
      ...this.product,
      qty : this.product.qty - 1 > 0 ? this.product.qty - 1 : 1
    }
  }

}
