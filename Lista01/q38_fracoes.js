const input = require('prompt-sync')();

// Entrada
const fração1 = Number(input('Coloque o numerador da primeira fração: ')) 
const denominador1 = Number(input('Coloque o denominador da primeira fração: '))
const fração2 = Number(input('Coloque o numerador da segunda fração: '))
const denominador2 = Number(input('Coloque o denominador da sengunda fração: '))

// Processamento
const resultado_numerador = (fração1 * denominador2) + (fração2*denominador1) 
const resultado_denominador = denominador1 * denominador2


// Saída
console.log(`O resultado da soma das frações é ${resultado_numerador}/${resultado_denominador}`)