// Jest va a identificar la carpeta test y dentro las pruebas y seran ejecutadas automaticamente.
import { sumar, multiplicar, restar, dividir } from "../maths.js";

// descripcion
describe("Calculos matematicos", () => {
  test("Prueba de suma", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("Prueba de multiplicar", () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
});
