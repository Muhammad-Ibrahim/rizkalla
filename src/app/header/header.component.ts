import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  cart: Array<string>
  cartLoadded: boolean = false
  productsCase: any
  result: boolean = false

  inCart: number
  products: Object
  searchText: string

  productName = new FormControl()

  constructor(private data: DataService) {
    this.data.currentSharedProducts.subscribe(currentSharedProducts => {
      this.products = currentSharedProducts
    });
    this.data.currentCart.subscribe(currentCart => {
      this.cart = currentCart
      this.inCart = this.cart.length
    });
  }

  stop: number = 1

  clearSearchEffect() {
    this.data.clearSearchEffect()
  }

  search(productName: string) {
    this.products = this.data.products
    if (productName === '' && this.stop == 0) {
      this.result = false
      this.clearSearchEffect()
      this.stop = 1
      return
    }
    this.stop = 0
    this.productsCase = Object.values(this.products)
                          .filter( x => 
                            x.name.toLowerCase()
                            .startsWith(productName.toLowerCase())
                          )
    if(this.productsCase.length > 0) {
      this.result = true
      this.data.nChangeSharedProducts(this.productsCase)
    }
    else return
  }

  focusout() {
    setTimeout(() => this.result=false, 100)
  }

  ngOnInit() {
  }

  removeFromCart(i) {
    this.cart.splice(i, 1)
    if(this.cart.length < 1) this.cartLoadded = false
    this.data.changeCurrentCart(this.cart)
  }

  openCart() {
    if (this.cartLoadded) this.cartLoadded = false
    else if (this.cart.length > 0) this.cartLoadded = true
    else return
  }

}
