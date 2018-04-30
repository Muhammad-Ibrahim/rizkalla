import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Object
  cart: Array<string>

  constructor(private data: DataService) {
    this.data.currentSharedProducts.subscribe(currentSharedProducts => {
      this.products = currentSharedProducts
    });
    this.data.currentCart.subscribe(currentCart => {
      this.cart = currentCart
    });
  }

  ngOnInit() {
  }

  addToCart(productName: string) {
    this.cart.push(productName)
    this.data.changeCurrentCart(this.cart)
  }

}
