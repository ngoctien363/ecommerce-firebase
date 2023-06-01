import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sliders: Array<any> = [];
  produces: Array<any> = [];
  listFramgeColor: Array<any> = [];

  constructor() {
    this.sliders.push(
      {
        imagePath: '../../../../assets/produces/img2.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/img1.png',
        label: 'Home & Living',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
      {
        imagePath: '../../../../assets/produces/img3.png',
        label: 'Art & Collectibles',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      }
    );

    this.produces.push(
      {
        id: 1,
        imagePath: '../../../../assets/produces/chair.png',
        price: '195,13 $',
        text: 'Vonna Neva Walnut Sandalye Chair',
      },
      {
        id: 2,
        imagePath: '../../../../assets/produces/light.png',
        price: '458,43 $',
        text: 'Wood lamp, Floor Lamp, Lambader, Decorative',
      },
      {
        id: 3,
        imagePath: '../../../../assets/produces/chair2.png',
        price: '789,67 $',
        text: 'NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple',
      },
      {
        id: 4,
        imagePath: '../../../../assets/produces/goi.png',
        price: '43,23 $',
        text: 'Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches',
      }
    );
    this.listFramgeColor.push(
      {
        imagePath: '../../../../assets/produces/color-dot/1.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/color-dot/2.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/color-dot/3.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/color-dot/4.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/color-dot/5.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/color-dot/6.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imagePath: '../../../../assets/produces/color-dot/7.png',
        label: 'Clothing & Shoes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    );
  }
  ngOnInit(): void {}
}
