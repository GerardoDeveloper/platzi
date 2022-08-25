const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(5).max(15);
const lastName = joi.string().min(5).max(15);
const old = joi.number().integer().min(1).max(50);

/**
 * Cuando se crea un nuevo schema.
 */
const createTypePeopleSchema = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  old: old.required(),
});

/**
 * Cuando se actualiza un schema.
 */
const updateTypePeopleSchema = joi.object({
  name: name,
  lastName: lastName,
});

/**
 * Cuando se obtiene un schema por id.
 */
const getTypePeopleSchema = joi.object({
  id: id.required(),
});

// Exportamos.
module.exports = { createTypePeopleSchema, updateTypePeopleSchema, getTypePeopleSchema };