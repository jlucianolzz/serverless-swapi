const Planet = require("../../src/service/planets_service");
const planet = new Planet();
describe("Servicio de gestión de planetas", () => {
  test("debería devolver una lista de planetas", async () => {
    const result = await planet.getAll();
    expect(result.length).toBeGreaterThan(1);
  });
  test("debería devolver de registrar el planeta con campos incompletos", async () => {
    const data = { nombre: "Tatooine" };
    const result = await planet.add(data);
    expect(result.affectedRows).toBe(1);
  });
});
