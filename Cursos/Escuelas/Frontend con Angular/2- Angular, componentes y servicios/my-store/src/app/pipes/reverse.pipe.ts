import { Pipe, PipeTransform } from '@angular/core';

/**
 * Los Pipes son los encargados de procesar/transformar datos.
 */
@Pipe({
    name: 'reverse', // Nombre con el que lo vamos a llamar.
})
export class ReversePipe implements PipeTransform {
    /**
     * ? Método que se crea por defaul.
     * @param value
     * @returns
     */
    // transform(value: unknown, ...args: unknown[]): unknown {
    //   return null;
    // }

    transform(value: string): string {
        return value.split('').reverse().join(''); // Devolvemos el string dado vuelta.
    }
}
