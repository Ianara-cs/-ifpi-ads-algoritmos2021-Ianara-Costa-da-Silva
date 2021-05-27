const input = require('prompt-sync')();

// Entrada
const minutos = Number(input('Coloque a quantidade de minutos: '))

// Processamento
// Cálculo para saber a quantidade de dias, horas e minutos. 
const dias = (minutos - (minutos%1440)) / 1440
const horas = ((minutos % 1440) - (minutos%60)) / 60
const min = minutos % 60

// Saída
console.log(minutos, 'min será', dias, 'dia(s),', horas, 'h e', min, 'min')