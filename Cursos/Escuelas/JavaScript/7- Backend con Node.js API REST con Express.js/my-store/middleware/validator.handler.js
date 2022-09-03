const boom = require('@hapi/boom');

/**
 * Crea un middleware de forma dinámica el cual valida los datos.
 * @param {} schema Esquema a validar.
 * @param {} property Propiedad a evaluar.
 */
function validatorHandler(schema, property) {

  // estructura closure.
  return (request, response, next) => {

    // Sacamos la propiedad (body, params, query) esto se hará dinámicamente.
    const data = request[property];

    /**
     * De está forma le indicamos a Joi que le envie todos los errores que encuentre al cliente,
     * de lo contrario, en caso de a ver más de un error en el request, le mostrará sólo el primero,
     * así sucesivamente hasta reslver todos los errores.
     */
    const allError = { abortEarly: false };
    const { error } = schema.validate(data, allError);

    // Sí hay un error.
    if (error) {

      // Para que los middleware de errores  de tipo boom lo procesen, le mandamos el error.
      next(boom.badRequest(error));
    }

    // Sí no hay un error, ejecuta el siguiente middleware común.
    next();
  }
}

module.exports = validatorHandler;