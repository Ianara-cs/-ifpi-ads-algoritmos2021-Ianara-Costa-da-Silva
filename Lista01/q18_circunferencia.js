const input = require('prompt-sync')();

// Entrada
console.log('Para saber o comprimento da circunferência coloque o valor do raio')
const raio = Number (input('Raio da circunferência(cm): '))
const pi = 3

// Processamento
const comprimento = 2 * pi * raio

// Saída
console.log(`O comprimento da circunferência é ${comprimento} cm`)