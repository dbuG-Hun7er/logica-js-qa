//Indeces do Maior e do Menor


function indicesMaiorMenor(array) {
    if (array.length === 0) return null;
    let maior = 0;
    let menor = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maior]) 
            maior = i;
        if (array[i] < array[menor]) 
            menor = i;
        }   
    return { maior, menor };
}
//console.log(indicesMaiorMenor([3, 5, 1, 8, 2, 7, 4, 6]));
module.exports = { indicesMaiorMenor };