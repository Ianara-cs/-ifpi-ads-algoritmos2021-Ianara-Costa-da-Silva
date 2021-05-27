const input = require('prompt-sync')();

// Entrada
const meses = Number(input('Coloque a quantidade de meses: '))

// Processamento
// Cálculo para saber a quantidade de anos e meses.
const anos = (meses - (meses%12)) / 12
const meses_final = meses % 12

// Saída 
console.log(meses, 'meses será', anos, 'ano(s) e', meses_final, 'mês(s)')