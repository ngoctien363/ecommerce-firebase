import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  sliders: Array<any> = [];

  constructor(){
    this.sliders.push(
      {
          imagePath: '../../../../assets/produces/img1.png',
          label: 'First slide label',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
          imagePath: '../../../../assets/produces/img2.png',
          label: 'Second slide label',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
          imagePath: '../../../../assets/produces/img3.png',
          label: 'Third slide label',
          text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
  );

  }
  ngOnInit(): void {}

}
