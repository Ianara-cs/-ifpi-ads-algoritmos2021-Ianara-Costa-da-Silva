const input = require('prompt-sync')();

// Entrada
const horas = Number (input('horas: '))
const minutos = Number (input('minutos:'))

// Processamento
const equivalente_min = (horas * 60) + minutos

// Saída
console.log(horas, 'h e ', minutos, 'min')
console.log('É equivalente a', equivalente_min, 'minutos')