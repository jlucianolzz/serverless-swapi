const species = require("../../src/controller/species");

describe("Controlador de gestión de especies", () => {
  test("debería devolver el codigo de estado 200 al consultar las especies", (done) => {
    const event = {
      requestContext: { httpMethod: "GET" },
    };

    species.handler(event, null, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  test("debería devolver el codigo de estado 200 al consultar 1 especies", (done) => {
    const event = {
      requestContext: { httpMethod: "GET" },
      pathParameters: { id: "1" },
    };

    species.handler(event, null, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
