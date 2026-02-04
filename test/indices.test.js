const { 
    indicesMaiorMenor } 
    
    = require("../src/indices");
//      TESTE INDICES DO MAIOR E DO MENOR
test("deve retornar índice do maior e do menor", () => {
  const resultado = indicesMaiorMenor([3, 5, 1, 8, 2, 7, 4, 6]);
  expect(resultado).toEqual({ maior: 3, menor: 2 });
});

test("array vazio deve retornar null", () => {
  expect(indicesMaiorMenor([])).toBeNull();
});
