import { arrayFruits, arrayColors } from "../arrays";

describe("Comprobaremos que existe un elemento", () => {
  test("El array tiene banana?", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("El array no contiene un platano?", () => {
    expect(arrayFruits()).not.toContain("platano");
  });
});

describe("Comprobaremos la cantidad de elementos en un arreglo", () => {
  test("El arreglo tiene 6 elementos", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test("El arreglo tiene 5 elementos", () => {
    expect(arrayColors()).toHaveLength(5);
  });
});
