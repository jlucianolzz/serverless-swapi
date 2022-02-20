const Species = require("../../src/service/species_service");
const species = new Species();
describe("Servicio de gestión de especies", () => {
  test("debería devolver una lista de especies", async () => {
    const result = await species.getAll();
    expect(result.length).toBeGreaterThan(1);
  });

  test("No debería devolver una especie", async () => {
    const objResult = { undefined: "Not found" };
    const result = await species.getById(-1);
    expect(result).toMatchObject(objResult);
  });
});
