const {
    mdc
}
//      TESTE MDC = Máximo Divisor Comum
    = require('../src/calcularMDC');

    test(' MDC de 48 e 18 deve ser 6', () => {
        expect(mdc(48, 18)).toBe(6);
    });