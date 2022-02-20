const fetch = require("node-fetch");

const entity = require("../entity/species_entity");
const { parsearEntidad } = require("../helper/mapper_helper");

class SpeciesService {
  constructor(uri) {
    this.uri = uri || `${process.env.SWAPI_URL}/species`;
  }

  async getAll() {
    const response = await fetch(this.uri);
    const data = await response.json();
    const results = data.results.map((data) => parsearEntidad(entity, data));
    return results;
  }

  async getById(id) {
    const response = await fetch(`${this.uri}/${id}`);
    const data = await response.json();
    return parsearEntidad(entity, data);
  }
}
module.exports = SpeciesService;
