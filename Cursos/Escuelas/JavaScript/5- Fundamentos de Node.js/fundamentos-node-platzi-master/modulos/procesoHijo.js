const { exec, spawn } = require('child_process'); // Importación de modulos e propiedades.

/**
 * Se utiliza cuando se quiere que un proceso hijo devuelva un msj de estado simple.
 */
exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
});

/**
 * Lista los archivos en linux.
 */
exec('ls -al', (error, stdout, sterr) => {
    /**
     * error: El error.
     * stdout: Es la salida principal estándar.
     * sterr: Error estandar.
     */

    if (error) {
        console.error(error);
        return false;
    }

    console.log(stdout);
});

/**
 * Se utiliza cuando se quiere que un proceso hijo devuelva datos enormes.
 */
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid); // El PID del proceso.
console.log(proceso.connected); // Sí esta conectado o no.

// Detecta cuando hay datos.
proceso.stdout.on('data', (dato) => {
    console.log('¿Está muerto?');
    console.log(proceso.killed); // Mata un proceso.
    console.log(dato.toString()) // Lista el contenido del directorio.
});

// Detecta cuando el proceso se termina.
proceso.on('exit', () => {
    console.log('el proeso terminó');
    console.log(proceso.killed) // Mata un proceso.
});
