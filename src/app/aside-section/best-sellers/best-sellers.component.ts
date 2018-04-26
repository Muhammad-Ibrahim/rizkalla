import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {
  stars: Array<number> = [1,2,3,4,5];
  products = [
    {name: "Lorem Ipsum", rate: 4, offer: "899.99", oPrice: 1099.99, imageUrl: "../../../assets/tv.jpg"},
    {name: "Lorem Ipsum", rate: 2.7, offer: "929.99", oPrice: 1059.99, imageUrl: "../../../assets/tv.jpg"},
    {name: "Lorem Ipsum", rate: 3.8, offer: "900.99", oPrice: 1399.99, imageUrl: "../../../assets/tv.jpg"},
  ]

  constructor() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].rate = Math.round(this.products[i].rate*2)/2
    }
    console.log(this.products)
  }

  ngOnInit() {
  }

  rateAs(i, s) { //i is the product index and s is the start no.
    this.products[i].rate = s+1
    console.log(i, s+1)
  }

}
