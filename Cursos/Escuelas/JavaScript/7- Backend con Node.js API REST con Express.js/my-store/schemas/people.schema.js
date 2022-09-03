const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(5).max(15);
const lastName = Joi.string().min(5).max(15);
const old = Joi.number().integer().min(1).max(50);

/**
 * Cuando se crea un nuevo schema.
 */
const createPeopleSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  old: old.required(),
});

/**
 * Cuando se actualiza un schema.
 */
const updatePeopleSchema = Joi.object({
  name: name,
  lastName: lastName,
});

/**
 * Cuando se obtiene un schema por id.
 */
const getPeopleSchema = Joi.object({
  id: id.required(),
});

// Exportamos.
module.exports = { createPeopleSchema, updatePeopleSchema, getPeopleSchema };