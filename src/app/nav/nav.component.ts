import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  categories: Object
  caKeys: Array<string>

  mainMenu: boolean = false
  subMenu: Array<boolean> = []
  open: boolean = false

  constructor(private data: DataService) {
    this.categories = data.categories
    this.caKeys = Object.keys(this.categories)
    this.caKeys.map(x => this.subMenu.push(false))
  }
  
  ngOnInit() {
  }

}
