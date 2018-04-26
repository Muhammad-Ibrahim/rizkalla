import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  categories: Object
  caKeys: Array<string>

  constructor(private data: DataService) {
    this.categories = data.categories
    this.caKeys = Object.keys(this.categories)
  }

  ngOnInit() {
  }

}
