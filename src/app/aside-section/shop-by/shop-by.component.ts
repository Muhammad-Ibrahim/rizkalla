import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { NouisliderModule } from 'ng2-nouislider';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'shop-by',
  templateUrl: './shop-by.component.html',
  styleUrls: ['./shop-by.component.scss']
})
export class ShopByComponent implements OnInit {
  products: Object
  productsCase: any

  categories: Object
  caKeys: Array<string>
  filter: Array<boolean> = [true, true, true, true]
  showSub: Array<boolean> = []

  headingCaret = ["fa fa-caret-down", "fa fa-caret-down", "fa fa-caret-down", "fa fa-caret-down"]
  caret: Array<string> = []

  priceRange = [2000, 50000]
  mainPriceRange = [2000, 50000]
  sizeRange = [5, 65]
  mainSizeRange = [5, 65]
  colors = ["red", "green", "blue", "white"]
  selectedColor: string

  constructor(private data: DataService) {
    data.currentSharedProducts.subscribe(currentSharedProducts => {
      this.products = currentSharedProducts
    });
    this.categories = data.categories
    this.caKeys = Object.keys(this.categories)
    this.caKeys.map( key => this.caret.push("fa fa-caret-left"))
  }

  ngOnInit() {
  }

  toggleShowSub(i) {
    this.showSub[i] = !this.showSub[i];
    (this.caret[i] == "fa fa-caret-down") ? this.caret[i] = "fa fa-caret-left" : this.caret[i] = "fa fa-caret-down"
  }

  toggleFilter(i) {
    this.filter[i] = !this.filter[i];
    (this.headingCaret[i] == "fa fa-caret-down") ? this.headingCaret[i] = "fa fa-caret-left" : this.headingCaret[i] = "fa fa-caret-down"
  }

  clearPriceRangeEffect() {
    this.data.clearPriceRangeEffect()
  }

  priceChange(event) {
    this.products = this.data.products
    if (event[0] == this.mainPriceRange[0] && event[1] == this.mainPriceRange[1]) {
      this.clearPriceRangeEffect()
      this.priceRange[0] = event[0]
      this.priceRange[1] = event[1]
      return
    }
    this.priceRange[0] = event[0]
    this.priceRange[1] = event[1]
    this.productsCase = Object.values(this.products)
                          .filter( x => 
                            x.offer >= event[0] && x.offer <= event[1]
                          )
    this.data.pChangeSharedProducts(this.productsCase, event)
  }

  sizeChange(event) {
    this.sizeRange[0] = event[0]
    this.sizeRange[1] = event[1]
  }

  selectColor(i) {
    this.selectedColor = this.colors[i]
    console.log(this.selectedColor)
  }

}