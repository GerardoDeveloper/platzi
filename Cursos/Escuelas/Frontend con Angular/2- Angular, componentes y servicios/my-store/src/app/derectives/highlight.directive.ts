import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Realiza modificaciones directas del DOM.
 *
 * ! NOTA: Sólo usar como último recurso según la documentación de Angular.
 */
@Directive({
    selector: '[appHighlight]', // <--- Nombre de la directiva que va a ser usado en HTML.
})
export class HighlightDirective {
    constructor(private elementRef: ElementRef) {
        // this.elementRef.nativeElement.style.backgroundColor = 'red';
    }

    /**
     * Escuchamos un evento.
     */
    @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.elementRef.nativeElement.style.backgroundColor = '';
    }
}
