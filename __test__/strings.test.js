describe("Comprobar cadenas de texto", () => {
  const text = "es un bonito texto";

  test("Debe contener el siguiente texto", () => {
    expect(text).toMatch(/bonito/);
  });
  test("No contiene el siguiente texto", () => {
    expect(text).not.toMatch(/es/);
  });
  test("Comprobar el tamaño del texto", () => {
    expect(text).toHaveLength(15);
  });
});
