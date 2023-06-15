import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DetectBrowserZoomService {

    constructor() { }

    initialZoom = +(window.outerWidth / window.innerWidth * 100).toFixed();
    
    private browserZoomSource = new BehaviorSubject<number>(this.initialZoom);
    browserZoom$      = this.browserZoomSource.asObservable();

    updateBrowserZoom(zoom: number) {
        this.browserZoomSource.next(zoom);
    }
}