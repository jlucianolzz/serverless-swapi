const planet = require("../../src/controller/planet");

describe("Controlador de gestión de planetas", () => {
  test("debería devolver el codigo de estado 200", (done) => {
    const event = {
      requestContext: { httpMethod: "GET" },
    };

    planet.handler(event, null, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  test("debería devolver el codigo de estado 201 al registrar un nuevo planeta", (done) => {
    const event = {
      requestContext: { httpMethod: "POST" },
      body: JSON.stringify({
        nombre: "Tatooine",
        periodo_rotacion: "23",
        periodo_orbita: "304",
        diametro: "10465",
        clima: "arid",
        gravedad: "1 standard",
        terreno: "desert",
        superficie_agua: "1",
        poblacion: "200000",
        residentes: ["https://swapi.py4e.com/api/people/1/"],
        peliculas: [
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/4/",
        ],
        url: "/planets",
      }),
    };

    planet.handler(event, null, (err, res) => {
      expect(res.statusCode).toBe(201);
      done();
    });
  });
});
