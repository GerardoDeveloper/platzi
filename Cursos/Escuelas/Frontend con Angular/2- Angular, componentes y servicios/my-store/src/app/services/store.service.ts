import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Librería que aplica los patrones de Observables.

import { Product } from './../models/product.model';

@Injectable({
    providedIn: 'root', // <--- Scope o alcance del servicio.
})
export class StoreService {
    private myShoppingCart: Product[] = []; // Aquí es donde se agregan los productos que el usuario agrega.

    // ? Creamos un estado compartido con 'BehaviorSubject' para generar reactividad.
    private myCart = new BehaviorSubject<Product[]>([]); // Creamos una instancia de 'BehaviorSubject'

    /**
     * Creamos un suscriptor
     *
     * * En Angular las variables con signo '$' detrás son 'observable'
     */
    myCart$ = this.myCart.asObservable();

    addProduct(product: Product) {
        this.myShoppingCart.push(product);
        this.myCart.next(this.myShoppingCart); // Emitimos una notificación cuando se agrega un producto a la lista.
    }

    getShoppingCart(): Product[] {
        return this.myShoppingCart;
    }

    getTotal(): number {
        return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    }
}
