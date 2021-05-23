const input = require('prompt-sync')();

// Entrada
console.log('Escolha dois números inteiros para efetuar a divisão e ver seu resto')

const num1 = Number (input('Primeiro número: '))
const num2 = Number (input('Segundo número : '))

// Processamento
const divisão = num1 / num2
const resto = num1 % num2

// Saída
console.log(`O resultado da divisão é ${divisão} e o resto é ${resto}`)