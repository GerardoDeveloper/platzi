const boom = require('@hapi/boom');

/**
 *
 * @param {} schema Esquema a validar.
 * @param {} property Propiedad a evaluar.
 */
function validatorHandler(schema, property) {

  // estructura closure.
  return (request, response, next) => {
    const data = request[property]; // Sacamos la propiedad (body, params, query).
    const allError = {abortEarly: false}; // De esta faorma le indicamos a Joi que le envie todos los errores que encuentre al cliente.
    const { error } = schema.validate(data, allError);

    // Sí hay un error.
    if (error) {
      next(boom.badRequest(error));
    }

    // Sí no hay un error, ejecuta el siguiente middleware.
    next();
  }
}

module.exports = validatorHandler;