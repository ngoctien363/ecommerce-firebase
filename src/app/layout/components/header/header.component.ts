import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  LOGO = "../../../../assets/E-commerce.png";
  user= "../../../../assets/User.png";
  cart= "../../../../assets/bag.png";
  menu = [{key: 1, value: 'Jewelry & Accessories'}, {key: 2, value: 'Clothing & Shoes'}, {key: 3, value: 'Home & Living'}, 
  {key: 4, value: 'Wedding & Party'}, {key: 5, value: 'Toys & Entertainment'}, {key: 6, value: 'Art & Collectibles'}, {key: 7, value: 'Craft Supplies & Tools'}]

  ngOnInit(): void {}

}
