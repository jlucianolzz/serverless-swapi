const Joi = require("joi");

const planetSchema = Joi.object({
  nombre: Joi.string().max(255).required(),
  diametro: Joi.string().max(255).required(),
  periodo_rotacion: Joi.string().max(255).required(),
  periodo_orbita: Joi.string().max(255).required(),
  gravedad: Joi.string().max(255).required(),
  poblacion: Joi.string().max(255).required(),
  clima: Joi.string().max(255).required(),
  terreno: Joi.string().max(255).required(),
  superficie_agua: Joi.string().max(255).required(),
  residentes: Joi.array().items(Joi.string().max(100).required()).max(10),
  peliculas: Joi.array().items(Joi.string().max(100).required()).max(10),
  url: Joi.string().max(255).required(),
});

module.exports = {
  planetSchema,
};
