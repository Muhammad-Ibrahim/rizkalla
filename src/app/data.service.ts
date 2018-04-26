import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {
  private _categories: Object = {
    "Mobiles & Tablets": ["iPhone 5", "Galaxy Note 5", "Oppo F5"],
    "TV's & Entertainment": ["XBOX", "Toshiba"],
    "Large Applicane": ["Refrigators", "Kitchen Machines"],
    "Kitchen Appliances": ["Dishes Washing Machine", "iCook"],
    "Air Conditioning": ["Carrier", "Bright Fresh"],
    "Personal Care": ["Women", "Men"],
    "Home Accessories": ["Tabels", "Oil Heater"]
  }

  private _products = [
    {name: "Lorem Ipsum",desc:"Loresm Ipsum lorem ipsum", offer: 89934.99, oPrice: 1099.99, imageUrl: "../../../assets/product.jpg"},
    {name: "Porem Ipsum",desc:"Loresm Ipsum lorem ipsum", offer: 9249.99, oPrice: 1059.99, imageUrl: "../../../assets/product.jpg"},
    {name: "Norem Ipsum",desc:"Loresm Ipsum lorem ipsum", offer: 35000.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg"},
    {name: "Toshiba Ium",desc:"Loresm Ipsum lorem ipsum", offer: 1900.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg"},
    {name: "Lorem Ipsum",desc:"Loresm Ipsum lorem ipsum", offer: 9300.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg"},
    {name: "Lorem Ipsum",desc:"Loresm Ipsum lorem ipsum", offer: 94400.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg"},
  ]

  private sharedProducts = new BehaviorSubject<any>(this._products)
  private searching = new BehaviorSubject<boolean>(false)

  currentSharedProducts = this.sharedProducts.asObservable()
  currentSearching = this.searching.asObservable()

  nCurrent: any
  pCurrent: any
  lastEvent: any

  constructor() {
  }

  get categories(): Object {
    return this._categories
  } 

  get products(): Object {
    return this._products
  }


  nChangeSharedProducts(productsCase: any) {
    let current: any
    if(this.pCurrent) current = this.pCurrent
    else current = this._products

    this.nCurrent = current.filter(x => x.name == productsCase[0].name) //productsCase in currentShared
    this.changeSharedProducts(this.nCurrent)
  }
  clearSearchEffect() {
    this.nCurrent = null
    this.changeSharedProducts(this._products) 
    this.pChangeSharedProducts(this.pCurrent, this.lastEvent)   
  }


  pChangeSharedProducts(productsCase: any, event) {
    this.lastEvent = event
    let current: any
    if(this.nCurrent) current = this.nCurrent
    else current = this._products

    this.pCurrent = current.filter(x => x.offer >= this.lastEvent[0] && x.offer <= this.lastEvent[1]) //productsCase in currentShared
    this.changeSharedProducts(this.pCurrent)
  }
  clearPriceRangeEffect() {
    this.pCurrent = null
    this.changeSharedProducts(this._products) 
    this.nChangeSharedProducts(this.nCurrent)   
  }


  changeSharedProducts(productsCase: any) {
    this.sharedProducts.next(productsCase)
  }
  
  changeCurrentSearching(searching: boolean) {
    this.searching.next(searching)
  }

}
