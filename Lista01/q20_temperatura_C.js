const input = require('prompt-sync')();

// Entrada
console.log('Coloque uma temperatura em °C para converter em °F')
const temperatura_C = Number (input('Temperatura em °C: '))
 
// Processamento
const temperatura_F = (9*temperatura_C + 160) / 5

// Saída
console.log(`A temperatura ${temperatura_C} °C é equivalente a ${temperatura_F.toFixed(0)} °F`)