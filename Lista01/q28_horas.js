const input = require('prompt-sync')();

// Entrada
const horas = Number(input('Coloque a quantidade de horas: '))

// Processamento
// Cálculo para saber quantas semanas, dias e horas.
const semana = (horas - (horas%168)) / 168
const dias = ((horas % 168) - (horas%24)) / 24
const horas_final = horas % 24

// Saída
console.log(horas, 'h será', semana, 'semana(s),', dias, 'dia(s) e', horas_final, 'h' )