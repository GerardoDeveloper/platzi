import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Módulo de Angular Form.
import { HttpClientModule } from '@angular/common/http'; // Módulo de HTTP

import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './derectives/highlight.directive';

@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        ProductComponent,
        ProductsComponent,
        NavComponent,
        ReversePipe,
        TimeAgoPipe,
        HighlightDirective,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule, // Importa los modulos de formularios.
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
