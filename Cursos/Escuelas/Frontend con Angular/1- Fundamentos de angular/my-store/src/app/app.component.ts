import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // String interpolation
  // ? Es muy importante que las variables sean public, de lo contrario, el template no lo reconocera.
  widthImg = 20;
  name = 'Gerardo';
  age = 35;
  img = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  listNames: string[] = ['Gerardo', 'Ariel', 'Julian', 'Santy'];
  newName = '';
  box = {
    width: 100,
    heigth: 100,
    background: 'red'
  };

  register = {
    name: '',
    email: '',
    password: ''
  }

  // Property binding
  btnDisabled = true;

  // Manipulando propiedades con objetos
  person = {
    name: 'Esteban',
    age: 25,
    avatar: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  // Event Binding
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);


  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }

  addName() {
    this.listNames.push(this.newName);
    this.newName = ''; // Esto hará que se limpie nuestra variable 'newName' lo cual se limpiará también la caja de texto por el data binding de doble via.
  }

  deleteName(index: number) {
    this.listNames.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
