import { Component, OnInit, NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'metabar',
  templateUrl: './metabar.component.html',
  styleUrls: ['./metabar.component.scss']
})
export class MetabarComponent implements OnInit {
  flags: Object = {
    egypt: "egypt",
    sa: "sa"
  }
  flag: string
  countries: Array<Object> = [
    {country: "Egypt", flag: "egypt"},
    {country: "Saudi Arabia", flag: "sa"},
    {country: "United Arab Emirates", flag: "uae"}
  ]
  country = this.countries[0]["country"] //default country
  languages: Array<string> = [
    "English",
    "Arabic",
    "French",
    "Italic"
  ]
  language = this.languages[0] //default language

  constructor() {
    this.countries.map( country => {
      country["flag"] = `../../assets/${country["flag"]}.svg`
    })
    this.flag = this.countries[0]["flag"] //default flag
  }

  changeLang(i) {
    this.language = this.languages[i]
  }
  changeCountry(i) {
    this.country = this.countries[i]["country"]
    this.flag = this.countries[i]["flag"]
  }

  ngOnInit() {
  }

}
