const {
    mdc
}
//      TESTE MDC = Máximo Divisor Comum
    = require('../src/calcularMDC');

    test(' MDC de 48 e 18 deve ser 6', () => {
        expect(mdc(48, 18)).toBe(6);
    });

    test(' MDC de 100 e 25 deve ser 25', () => {
        expect(mdc(100, 25)).toBe(25);
    });