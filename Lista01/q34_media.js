const input = require('prompt-sync')();

// Entrada
console.log('Coloque três números para fazer sua media')
const num1 = Number(input('Primeiro número: '))
const num2 = Number(input('Segundo número: '))
const num3 = Number (input('Terceiro número: '))

// Processamento
const media = (num1+num2+num3) / 3

// Saída
console.log('O resultado da média é', media.toFixed(1))
