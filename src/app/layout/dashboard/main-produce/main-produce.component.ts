import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-produce',
  templateUrl: './main-produce.component.html',
  styleUrls: ['./main-produce.component.scss'],
})
export class MainProduceComponent implements OnInit {
  produces: Array<any> = [];
  listFrameColor: Array<any> = [];
  listRectangle: Array<any> = [];

  constructor() {
    this.getImageForProduces();
    this.getListFrameColor();
  }
  ngOnInit(): void {}

  getRectangle() {
    this.listRectangle.push(
      {
        id: 1,
        imagePath: '../../../../assets/produces/img4.png',
        title: 'A community doing good',
        text: 'Commerce is a global online marketplace, where people.',
      },
      {
        id: 2,
        imagePath: '../../../../assets/produces/img5.png',
        title: 'Support independent creators',
        text: 'Just millions of people selling the things they love.',
      },
      {
        id: 3,
        imagePath: '../../../../assets/produces/img6.png',
        title: 'Peace of mind',
        text: 'Privacy is the highest priority of our dedicated team.',
      }
    );
  }

  getImageForProduces() {
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
  }

  getListFrameColor() {
    this.listFrameColor.push(
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
}
