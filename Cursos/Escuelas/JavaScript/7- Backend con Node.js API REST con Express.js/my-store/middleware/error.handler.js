/**
 * Caputura todos los errores y los envía al siguiente middleware (errorHandler).
 * @param {object} error Errores ocurridos.
 * @param {object} request Petición del cliente.
 * @param {object} response Respuesta al cliente.
 * @param {function} next Pasar al siguiente middleware.
 */
function logErrors(error, request, response, next) {
  console.error(error); //mostrará el error por consola, si lo hubiere.

  /**
   * Importante para saber que se esta enviando a un middleware de tipo error,
   * si no tiene el error dentro entonces se esta mandando a un middleware normal.
   */
  next(error);
}

/**
 * Crear formato para devolverlo al cliente que se complementa con la función anterior.
 * @param {object} error El error.
 * @param {object} request Petición del cliente.
 * @param {object} response Respuesta al cliente.
 * @param {function} next Pasar al siguiente middleware.
 */
function errorHandler(error, request, response, next) { // Así no se utilice next en el código se debe poner igual, ya que un middleware de error tiene los cuatro parámetros.
  const messageError = { // Indicar que el error es estatus 500 Internal Server Error.
    message: error.message, // Mostrar al cliente el mensaje de error.
    stack: error.stack, // Mostrar información del error.
  };

  response.status(500).json(messageError)
}

/**
 * Obtiene un error de tipo 'boom'
 * @param {object} error El error.
 * @param {object} request Petición del cliente.
 * @param {object} response Respuesta al cliente.
 * @param {function} next Pasar al siguiente middleware.
 */
function boomErrorHandler(error, request, response, next) { // Así no se utilice next en el código se debe poner igual, ya que un middleware de error tiene los cuatro parámetros.

  // Sí el error es de tipo Boom.
  if (error.isBoom) {
    const { output } = error;

    const statusCode = output.statusCode; // Sacamos el código de estado.
    const payload = output.payload; // Sacamos la información del error.

    // Retorna un msj dinámico al cliente según el error campturado por la librería Boom.
    response.status(statusCode).json(payload);
  }

  // Sí no es de tipo Boom, ejecuta el siguiente middleware de tipo error.
  next(error);
}

// Exportación de funciones.
module.exports = { logErrors, errorHandler, boomErrorHandler }