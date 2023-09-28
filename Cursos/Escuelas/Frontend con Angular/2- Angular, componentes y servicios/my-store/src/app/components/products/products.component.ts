import { Component, OnInit } from '@angular/core';

import { Product } from './../../models/product.model';
import { StoreService } from './../../services/store.service';
import { ProductsService } from './../../services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    myShoppingCart: Product[] = []; // Aquí es donde se agregan los productos que el usuario agrega.
    total = 0;
    products: Product[] = [];
    today = new Date();
    date = new Date(2021, 1, 21);

    constructor(
        private storeService: StoreService,
        private productsService: ProductsService,
    ) {
        this.myShoppingCart = this.storeService.getShoppingCart();
    }
    ngOnInit(): void {
        /**
         * * Angular por defecto utiliza un patrón llamado 'Observable', debido a esto, se utiliza el método 'subscribe'
         * * para obtener los datos.
         */
        this.productsService.getAllProducts().subscribe((data) => {
            this.products = data;
        });
    }

    /**
     * Evento que escucha cuando se agrega un nuevo producto desde el cmponente hijo.
     */
    onAddShoppingCart(product: Product) {
        this.storeService.addProduct(product);
        this.total = this.storeService.getTotal();
    }
}
