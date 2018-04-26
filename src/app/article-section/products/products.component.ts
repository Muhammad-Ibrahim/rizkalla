import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Object

  constructor(private data: DataService) {
    this.data.currentSharedProducts.subscribe(currentSharedProducts => {
      this.products = currentSharedProducts
    });
  }

  ngOnInit() {
  }

}
