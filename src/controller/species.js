"use strict";

const { formatResponse, formatError } = require("../helper/formatter_helper");
const Species = require("../service/species_service");

const speciesHandler = async (event, context, callback) => {
  let response;
  try {
    const species = new Species();

    const id = event.pathParameters?.id;
    let data = {
      species: id ? await species.getById(id) : await species.getAll(),
    };
    response = formatResponse(data);
  } catch (error) {
    response = formatError(error);
  }
  return callback(null, response);
};

module.exports.handler = speciesHandler;
