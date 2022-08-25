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
})

/**
 * Se utiliza cuando se quiere que un proceso hijo devuelva datos enormes.
 */
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid); // El PID del proceso.
console.log(proceso.connected); // Sí esta conectado o no.

// Detecta cuando hay datos.
proceso.stdout.on('data', function (dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed); // Mata un proceso.
    console.log(dato.toString()) // Lista el contenido del directorio.
});

// Detecta cuando el proceso se termina.
proceso.on('exit', function() {
    console.log('el proeso terminó');
    console.log(proceso.killed) // Mata un proceso.
})
