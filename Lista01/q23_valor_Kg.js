const input = require('prompt-sync')();

// Entrada
console.log('Coloque um valor em quilogramas para ser convertido em gramas')
const valor_kg = Number (input('Valor em Kg: '))

// Processamento
const valor_g = valor_kg * Math.pow(10, 3)

// Saída 
console.log(`${valor_kg} Kg é equivalente a ${valor_g} g`)