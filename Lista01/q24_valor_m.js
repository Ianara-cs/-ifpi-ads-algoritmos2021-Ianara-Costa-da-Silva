const input = require('prompt-sync')();

// Entrada
console.log('Coloque um valor em metros para que seja convertido em centímetros')
const valor_m = Number (input('Valor em metros: '))

//processamento
const valor_cm = valor_m * Math.pow(10, 2)

// Saída
console.log(`${valor_m} m é equivalente a ${valor_cm} cm`)