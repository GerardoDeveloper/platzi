// const p = require('process'); // --> No es necesario importarlo, porque viene en los modulos globales.

/**
 * NodeJs es orientado a eventos, por esto podemos escuchas eventos con el método 'on'.
 * 'beforeExit' detecta antes de terminar un proceso.
 */
process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

/**
 * Detecta que el evento a terminado.
 */
process.on('exit', () => {
    console.log('Ale, el proceso acabó');

    /**
     * NOTA: Todo lo que ocurra aquí no se va a mostrar, porque el proceso ya termino,
     *       en caso de tener una función async. Pero sí el código es sync, si se va a ejecutar
     *       en el hilo principal.
     */
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

/**
 * Ejecuta una función en X tiempo.
 */
setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);

/**
 * Controla excepciones que no se han controlado.
 */
process.on('uncaughtException', (error, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error.');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

/**
 * Para promesas que se han rechazado y nadie las ha capturado.
 */
process.on('uncaughtRejection', (error, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error de la promesa');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones de una promesa.');
    }, 0);
});


funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');
