import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-services',
  templateUrl: './custom-services.component.html',
  styleUrls: ['./custom-services.component.scss']
})
export class CustomServicesComponent implements OnInit {
  services = [
    {img:"../../../assets/shipping.png", name:"FREE DELIVERY", desc:"From $59.89"},
    {img:"../../../assets/support.png", name:"SUPPORT 24/7", desc:"Online 24 hours"},
    {img:"../../../assets/return.png", name:"FREE RETURN", desc:"14-day"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
