const input = require('prompt-sync')();

// Entrada
const num = Number(input('Coloque um número com três dígitos: '))

// Processamento
const cem = (num - (num % 100)) / 100
const dez = (( num%100) - (num %10)) / 10
const uni = num % 10
const inverso = (uni*100 + dez*10 + cem*1)
const soma = num + inverso 


// Saída
console.log(`O número ${num} tem seu inverso "${inverso}" e a soma desse número com seu inverso é: ${soma} `)
