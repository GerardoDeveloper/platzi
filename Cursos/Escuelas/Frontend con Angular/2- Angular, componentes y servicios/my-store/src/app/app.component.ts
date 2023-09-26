import { Component } from '@angular/core';

import { Product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  imgParent = '';
  showImg = true;

  onLoad(img: string) {
    console.log('Log padre', img);

  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
