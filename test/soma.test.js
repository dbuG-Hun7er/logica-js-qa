const { 
    somaDosMultiplos } 
    = require("../src/soma");
//      TESTE SOMA DOS MÚLTIPLOS
test("abaixo de 10 deve dar 12 (5 + 7)", () => {
  expect(somaDosMultiplos(10)).toBe(12);
});

test("abaixo de 29 deve dar 145", () => {
  expect(somaDosMultiplos(29)).toBe(145);
});
