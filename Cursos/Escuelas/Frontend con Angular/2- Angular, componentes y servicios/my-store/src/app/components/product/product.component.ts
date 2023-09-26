import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  /**
   * Hay dos formas de iniiaizar una propiedad en un componente:
   * ? 1- Incializarla en vacío, eso significa que todas las propiedades de la interface 'Product' deben ser opcionales (esto no es una buena práctica)
   *      Ejemplo: @Input() product: Product = {};
   * ? 2- Incializar en un estado por defecto. Esto nos permite dar un estado inicial al componente, esto nos cubre de muchos potenciales errores.
   *      Ejemplo: @Input() product: Product = {
   *        id: '';
            name: '';
            price: 0;
            image: '';
   *      };
   */
  @Input() product: Product = {
            id: '',
            name: '',
            price: 0,
            image: ''
        };

  // Creamos una propiedad que se comunica con su componente padre de tipo 'EventEmitter' y este ultimo es de tipo 'Product'
  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart(): void {
    // Emitimos un producto.
    this.addedProduct.emit(this.product);
  }
}
