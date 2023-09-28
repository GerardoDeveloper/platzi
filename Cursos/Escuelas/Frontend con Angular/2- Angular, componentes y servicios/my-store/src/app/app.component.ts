import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    showImg = true;

    onLoad(img: string) {
        console.log('Log padre', img);
    }

    toggleImg() {
        this.showImg = !this.showImg;
    }
}
