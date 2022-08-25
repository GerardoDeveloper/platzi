const http = require('http'); // Importamos el módulo

// Creamos nuestro server.
http.createServer(router).listen(3000); //<--puerto de escucha

/**
 * Petición de prueba
 * @param {http} request Solicitud al server
 * @param {http} response Respuesta que brinda el server.
 */
function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end(); // Cierre de petición
            break;

        default:
            res.write('Error 404: No se lo que quieres');
            res.end(); // Cierre de petición
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' }) // Se agrega contenido a la cabecera.

    // // Escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();
}

/**
 * Imprime en pantalla
 * @returns string
 */
function hola() {
    return 'Hola, que tal';
}

console.log("Escuchando http en el puerto 3000");