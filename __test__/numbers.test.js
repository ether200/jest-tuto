import { numbers } from "../numbers";

// El bloque describe se denomina TEST SUIT

describe("Comparacion de numeros", () => {
  // Testea Mayor que
  test("Mayor que", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  // Testea Mayor que o igualdad
  test("Mayor que o igual", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  // Testea menor que
  test("Menor que", () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });
  // testea menor o igual
  test("Menor que o igual", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });
  // Testea igualdad de flotantes
  test("Numeros flotantes", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});
