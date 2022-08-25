const express = require('express'); // Importa el modulo de express.
const routerApi = require('./routes'); // Importamos todas las rutas desde el archivo principal 'index.js' de la carpeta 'routes'.
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler'); // Importamos nuestros middlewares de manejadores de errores.

const app = express(); // Creamos una app.
app.use(express.json()); // Utilizamos este middleware para recibir y leer formatos json utilizando el método POST.
// app.use(cors()); // ---> De esta forma le damos acceso a cualquier origen.

const wehiteList = ['http://127.0.0.1:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (wehiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido'));
    }
  }
};

app.use(cors(options)); // De esta forma filtramos el acceso de origen.
const port = process.env.PORT || 3000; // Definimos el puerto que escuchará nuestro server.

routerApi(app);

// Usuamos nuestros manejadres de errores.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Escuchamos e imprimimos por consola el puerto.
app.listen(port, () => {
  console.log(`N° de puerto: ${port}`);
});