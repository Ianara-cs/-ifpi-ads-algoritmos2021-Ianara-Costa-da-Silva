const input = require('prompt-sync')();

// Entrada
console.log('Coloque 3 números')
const A = Number(input('Primeiro número inteiro positivo: '))
const B = Number(input('Segundo número inteiro positivo: '))
const C = Number(input('Terceiro número inteiro positivo: '))

// Processamento
const expressão =  ((A+B) * (A+B) + (B+C) * (B+C)) / 2


console.log('O resultado da expressão é', expressão)