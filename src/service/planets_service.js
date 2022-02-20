const db = require("../config/db");

class PlanetService {
  constructor() {
    this.model = {
      nombre: "",
      diametro: "",
      periodo_rotacion: "",
      periodo_orbita: "",
      gravedad: "",
      poblacion: "",
      clima: "",
      terreno: "",
      superficie_agua: "",
      residentes: "[]",
      peliculas: "[]",
      url: "",
    };
  }

  async getAll() {
    const sql = `SELECT nombre,diametro,periodo_rotacion,periodo_orbita,gravedad,poblacion,clima,terreno,superficie_agua,residentes,peliculas,url FROM planeta;`;
    let result = await db.query(sql);
    await db.quit();
    return result;
  }

  async getById(id) {
    const sql = `SELECT nombre,diametro,periodo_rotacion,periodo_orbita,gravedad,poblacion,clima,terreno,superficie_agua,residentes,peliculas,url FROM planeta WHERE id=?;`;
    let result = await db.query(sql, [id]);
    await db.quit();
    return result;
  }

  async add(data) {
    let params = { ...this.model, ...data };
    params.residentes = JSON.stringify(params.residentes);
    params.peliculas = JSON.stringify(params.peliculas);
    const sql = `INSERT INTO planeta(nombre,diametro,periodo_rotacion,periodo_orbita,gravedad,poblacion,clima,terreno,superficie_agua,residentes,peliculas,url) VALUES(?,?,?,?,?,?,?,?,?,?,?,?);`;
    const values = Object.values(params);
    let result = await db.query(sql, values);
    await db.quit();
    return result;
  }
}

module.exports = PlanetService;
