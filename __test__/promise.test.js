import { getDataFromApi, getDataFromApi2 } from "../promises";

// Tambien podemos evaluar por propiedas con toHaveProperty("property")

describe("Probando promesas", () => {
  test("Realizando una peticion a una api", (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test("Realizando una peticion a una api con async await", async (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    const result = await getDataFromApi2(api);
    const array = result.data.results;
    expect(array.length).toBeGreaterThan(0);
    done();
  });

  test("Resuelve un Hola!", () => {
    return expect(Promise.resolve("Hola!")).resolves.toBe("Hola!");
  });

  // test("Rechaza un Error", () => {
  //   return expect(Promise.reject("Error").rejects.toBe("Error"));
  // });
});
