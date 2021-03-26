import { callbackHell, asyncFn } from "../callbacks";

// Cuanto utilizamos fn asyncronas debemos pasar done como argumento en la funcion de test, ejecutarlo al final del callback y luego llamarlo
describe("Probando un Callback", () => {
  test("Callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hola Javascripters");
      done();
    }
    // Le pasamos la funcion que requiere dicha funcion como callback
    callbackHell(otherCallback);
  });
  test("Callback II", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hola desarrolladores!");
      done();
    }
    asyncFn(otherCallback);
  });
});
