"use strict";

const Planet = require("../service/planets_service");
const { planetSchema } = require("../schema/planet_schema");
const { formatResponse, formatError } = require("../helper/formatter_helper");

const planetHandler = async (event, context, callback) => {
  let response;
  try {
    const planet = new Planet();
    const httpMethod = String(event.requestContext.httpMethod).toUpperCase();

    switch (httpMethod) {
      case "GET":
        const id = event.pathParameters?.id;
        let data = {};
        if (id) data.planet = await planet.getById(id);
        else data.planets = await planet.getAll();
        response = formatResponse(data);

        break;
      case "POST":
        const { error, value } = planetSchema.validate(JSON.parse(event.body), {
          stripUnknown: true,
        });

        if (!error)
          response = formatResponse(
            { id: (await planet.add(value)).insertId },
            201
          );

        break;
    }
  } catch (error) {
    response = formatError(error);
  }

  return callback(null, response);
};

module.exports.handler = planetHandler;
