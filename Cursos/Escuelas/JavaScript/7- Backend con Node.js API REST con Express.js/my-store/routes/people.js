const express = require('express');
const statusCodes = require('../statusCode.js'); // Importamos los estado de códigos.
const PersonService = require('../service/person.service');
const validatorHandler = require('../middleware/validator.handler');
const { createPeopleSchema, updatePeopleSchema, getPeopleSchema } = require('../schemas/people.schema');


const router = express.Router(); // Se crea un router especifico para people.
const service = new PersonService();
//==========================================================================================================
// GET
// Retornar una lista de nombres.
router.get('/', async (request, reponse) => {
  const data = await service.find();
  reponse.json(data);
});

//==========================================================================================================
// GET
// Recibir 1 parámetro y devolver un nombre en particular.
router.get('/:id', validatorHandler(getPeopleSchema, 'params'), async (request, reponse, next) => {
  try {
    /**
     * Recogemos el id mandado por parámetro.
     */

    // 1ra forma
    // const id = request.params.id;

    // 2da forma con ES6.
    const { id } = request.params; // Esto permite capturar de todos los parámetros que estan dentro de 'params' obtiene sólo el id.

    // Aplicamos la lógica utilizando el service.
    const person = await service.findOne(id);
    reponse.json(person);
  } catch (error) {
    next(error); // Ejecuta un middleware de errores de forma explicita.
  }
});

//==========================================================================================================
// POST
router.post('/', validatorHandler(createPeopleSchema, 'body'), async (request, response) => {
  try {
    const body = request.body; // Sacamos el cuerpo de la petición.
    const newPerson = await service.create(body);

    response.status(statusCodes.Created).json(newPerson);
  } catch (error) {
    response.status(statusCodes.NotFound).json({
      message: error
    });
  }
})

//==========================================================================================================

/**
 * PUT
 *
 * Este método es especial, porque toma los datos desde 'params' y 'body',
 * por está razón se pueden ejecutar un middleware para cada uno y así poder
 * validar losdatos provenientes desde params y body.
 */
router.put('/:id', validatorHandler(updatePeopleSchema, 'params'), validatorHandler(createPeopleSchema, 'body'), async (request, response, next) => {
  try {
    const { id } = request.params;
    const body = request.body; // Sacamos el cuerpo de la petición.
    const person = await service.update(id, body);

    response.status(statusCodes.OK).json(person);
  } catch (error) {
    next(error);
  }
});

//==========================================================================================================

/**
 * PATCH
 *
 * El mismo caso que PUT.
 */
router.patch('/:id', validatorHandler(updatePeopleSchema, 'params'), validatorHandler(createPeopleSchema, 'body'), async (request, response, next) => {
  try {
    const { id } = request.params;
    const body = request.body; // Sacamos el cuerpo de la petición.
    const person = await service.update(id, body);

    response.status(statusCodes.OK).json(person);
  } catch (error) {
    next(error);
  }
});

//==========================================================================================================
// DELETE
router.delete('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const person = await service.delete(id);

    response.status(statusCodes.OK).json(person);
  } catch (error) {
    next(error);
  }
});

// Exportamos las rutas.
module.exports = router;