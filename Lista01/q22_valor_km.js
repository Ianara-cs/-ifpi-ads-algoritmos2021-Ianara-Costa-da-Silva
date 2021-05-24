const input = require('prompt-sync')();

// Entrada
console.log('Coloque um valor em quilômetros para ser convertido em metros')
const valor_km = Number (input('Valor em Km: '))

// Processamento
const valor_m = valor_km * Math.pow(10, 3)

// Saída
console.log(`${valor_km} Km é equivalente a ${valor_m} m `)