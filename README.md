# Projeto - Lógica em JavaScript com Testes

Este projeto foi criado com o objetivo de praticar os **fundamentos de JavaScript** e os **conceitos iniciais de testes automatizados**, utilizando a biblioteca **Jest**.

O foco do projeto é o aprendizado da lógica de programação e do pensamento de QA brabo.

---

## 📚 Conteúdos praticados

- Funções em JavaScript
- Estruturas de repetição (`for`, `while`)
- Condições (`if`)
- Operadores matemáticos
- Organização de código
- Testes automatizados básicos
- Separação entre código e teste

---

## 📂 Estrutura do projeto

logica-js-qa/
├── src
│ ├── calcularMDC.js
│ ├── indeces.js
│ └── soma.js
│
├── test
│ └── MDC.test.js
│
├── package.json
└── README.md


---

## 🧪 Testes Automatizados

Os testes foram criados de forma simples, com o objetivo de entender os fundamentos.

Exemplo de teste:

```js
test("MDC de 48 e 18 deve ser 6", () => {
  expect(mdc(48, 18)).toBe(6);
});

Explicação:

test() define um teste

expect() define o valor esperado

toBe() compara o resultado com o valor esperado

Se o valor estiver correto, o teste passa.

Como executar os testes

No terminal, na raiz do projeto:

npm test


