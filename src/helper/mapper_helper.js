const parsearEntidad = (entidad, objeto) => {
  const model = {};
  Object.keys(objeto).forEach((key) => {
    model[entidad[key]] = objeto[key];
  });

  return model;
};

module.exports = { parsearEntidad };
