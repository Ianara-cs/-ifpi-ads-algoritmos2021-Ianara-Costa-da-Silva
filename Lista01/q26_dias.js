const input = require('prompt-sync')();

// Entrada
console.log('Coloque a quantidade de dias para saber quantas semanas e dias será')
const dias = Number (input('Coloque quantos dias: '))

// Processamento
const semana = dias / 7
const resto_dias = dias % 7

// Saída
console.log(`${dias} dias vai ser ${semana.toFixed(0)} semana(s) e ${resto_dias} dia(s)`)