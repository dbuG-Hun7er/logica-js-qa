// Soma dos Multiplos


function somaDosMultiplos(limite) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) 
            soma += i;
        }
    return soma;
}
//console.log(somaDosMultiplos(29));

module.exports = { somaDosMultiplos };