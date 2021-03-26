import { isNull, isTrue, isFalse, isUndefined } from "../true";

describe("Probar resultados nullos", () => {
  test("Si es null", () => {
    expect(isNull()).toBeNull();
  });
});

describe("Probar resultados true", () => {
  test("Si es true", () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("Probar resultados falsos", () => {
  test("Si es falso", () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe("Probar resultados undefined", () => {
  test("Si es undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("Probar resultados NOT TRUE", () => {
  test("Si es falso o verdadero", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
