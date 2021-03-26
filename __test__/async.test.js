import { getDataFromApi } from "../promises";

describe("Probar Async/Await", () => {
  test("Realizar una peticion a una api", async () => {
    const api = "https://rickandmortyapi.com/api/character/";
    const getRick = "https://rickandmortyapi.com/api/character/1";
    await getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      // Con async no es necesario utilizar done
    });
    await getDataFromApi(getRick).then((data) => {
      expect(data.name).toEqual("Rick Sanchez");
    });
  });

  test("Realizando una peticion a una api con error", async () => {
    try {
      await getDataFromApi(`http://httpstat.us/500`);
    } catch (error) {
      expect(error).toEqual(new Error("Request failed with status code 500"));
    }
  });
});
