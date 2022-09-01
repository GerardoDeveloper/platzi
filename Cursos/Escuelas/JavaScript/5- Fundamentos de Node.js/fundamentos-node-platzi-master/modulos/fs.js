// Importamos el module FileSystem
const fs = require('fs');

/**
 * Realiza la lectura sincrona de un archivo.
 * @param {string} ruta Ruta del archivo.
 * @param {function} callBack Función de callback.
 */
function leer(ruta, callBack) {
    fs.readFile(ruta, (error, data) => {
        if (error) {
            console.error(`Ha ocurrido el siguiente error al leer el archivo ${error.message}`);
        } else {
            callBack(data.toString());
        }
    })
}

/**
 * Escribe el contenido en un archivo.
 * @param {string} ruta Ruta del archivo.
 * @param {string} contenido Contenido del archivo.
 * @param {function} callBack Función de callback.
 */
function escribir(ruta, contenido, callBack) {
    fs.writeFile(ruta, contenido, (error) => {
        if (error) {
            console.error('No he podido escribirlo', error);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

/**
 * Elimina un archivo.
 * @param {string} ruta Ruta del archivo.
 * @param {function} callBack Función de callback.
 */
function borrar(ruta, callBack) {
    fs.unlink(ruta, callBack);
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
leer(__dirname + '/archivo1.txt', console.log)
borrar(__dirname + '/archivo1.txt', console.log);