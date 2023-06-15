import { Component, OnInit } from '@angular/core';
import { DetectBrowserZoomService } from './service/detect-browser-zoom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  zoom!: number;

  constructor(
    private detectBrowserZoomService: DetectBrowserZoomService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onResize(event: any) {
    this.zoom = +(
      (event.target.outerWidth / event.target.innerWidth) *
      100
    ).toFixed();
    this.detectBrowserZoomService.updateBrowserZoom(this.zoom);
  }
}
