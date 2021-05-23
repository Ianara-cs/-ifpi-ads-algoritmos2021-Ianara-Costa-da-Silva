const input = require('prompt-sync')();

// Entrada 
const minutos = Number (input('Quantos minutos: '))

// Processamento
const horas = minutos / 60
const minutos_total = minutos % 60

// Saída 
console.log(`É Equivalente a ${horas.toFixed(0)} h e ${minutos_total} min` )
