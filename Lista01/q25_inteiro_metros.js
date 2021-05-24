const input = require('prompt-sync')();

// Entrada
console.log('Coloque um número inteiro em metros para saber quantos quilômetros e metros será ')
const valor_metros = Number (input('Quantos metros: '))


// Processamento
const valor_km = valor_metros / Math.pow(10, 3)
const metros = valor_metros % Math.pow(10, 3)


// Saída 
console.log(`${valor_metros} m será ${valor_km.toFixed(0)} Km e ${metros} m  `)