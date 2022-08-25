function logErrors(error, request, response, next) {
  console.error(error); //mostrará el error por consola, si lo hubiere.
  next(error); //importante para saber que se esta enviando a un middleware de tipo error, si no tiene el error dentro entonces se esta mandando a uno normal.
}

// Crear formato para devolverlo al cliente que se complementa con la función anterior:
function errorHandler(error, request, response, next) { // Así no se utilice next en el código se debe poner igual, ya que un middleware de error tiene los cuatro parámetros.
  const messageError = { // Indicar que el error es estatus 500 Internal Server Error.
    message: error.message, // Mostrar al cliente el mensaje de error.
    stack: error.stack, // Mostrar información del error.
  };

  response.status(500).json(messageError)
}

function boomErrorHandler(error, request, response, next) { // Así no se utilice next en el código se debe poner igual, ya que un middleware de error tiene los cuatro parámetros.

  // Sí el error es de tipo Boom.
  if (error.isBoom) {
    const { output } = error;

    response.status(output.statusCode).json(output.payload); // Retorna un msj dinámico al cliente según el error campturado por la librería Boom.
  }

  next(error); // Sí no es de tipo Boom, ejecuta el siguiente middleware de tipo error.
}

module.exports = { logErrors, errorHandler, boomErrorHandler }