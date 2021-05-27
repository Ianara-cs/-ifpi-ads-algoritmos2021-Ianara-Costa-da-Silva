const input = require('prompt-sync')();

// Entrada
const segundos = Number (input('Coloque a quantidade de segundos: '))

// Processamento
// Cálculo para saber quantas horas minutos e segundos.
const horas = (segundos - (segundos%3600)) / 3600
const minutos = ((segundos % 3600) - (segundos%60)) / 60
const segundos_final =  segundos % 60
 
// Saída
console.log(`${segundos} s será ${horas} h, ${minutos} min e ${segundos_final} s`)