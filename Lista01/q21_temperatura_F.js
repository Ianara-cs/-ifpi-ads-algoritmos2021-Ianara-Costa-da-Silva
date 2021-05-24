const input = require('prompt-sync')();

// Entrada
console.log('Coloque uma temperatura em °F para converter em °C')
const temperatura_F = Number (input('Temperatura em °F: '))

// Processamento
const temperatura_C = (5*temperatura_F - 160) / 9

// Saída
console.log(`A temperatura ${temperatura_F} °F é equivalente a ${temperatura_C.toFixed(0)} °C`)
