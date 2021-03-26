describe("Comparadores comunes", () => {
  const user = {
    name: "Ivan",
    lastName: "M",
  };
  const user2 = {
    name: "Ivan",
    lastName: "M",
  };

  // Testea por igualdad
  test("igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });

  // Teste por desigualdad agregandole el pre fix not
  test("Desigualdad de elementos", () => {
    expect(user).not.toEqual(user2);
  });
});
