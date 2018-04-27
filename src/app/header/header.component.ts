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
  productsCase: any
  result: boolean = false

  inCart: number = 0
  products: Object
  searchText: string

  productName = new FormControl()

  constructor(private data: DataService) {
    this.data.currentSharedProducts.subscribe(currentSharedProducts => {
      this.products = currentSharedProducts
    });
  }

  stop: number = 1

  clearSearchEffect() {
    this.data.clearSearchEffect()
  }

  search(productName: string) {
    this.products = this.data.products
    if (productName === '' && this.stop == 0) {
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
    if(this.productsCase.length > 0) this.result = true
    this.data.nChangeSharedProducts(this.productsCase)
  }

  autoComplete(i) {
    this.productName = this.products[i].name
  }

  ngOnInit() {
  }

}
