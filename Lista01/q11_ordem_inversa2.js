const input = require('prompt-sync')();

// Entrada
console.log('Escolha um número com 3 dígitos para fazer seu inverso')
const number = input('Coloque o número: ')

console.log('Agora coloque os seus dígitos em suas respectivas ordens (esqueda para direita)')
const num1 = input('Primeiro:')
const num2 = input('Segundo: ')
const num3 = input('Terceiro: ')

// Saída 
console.log(`O número ${number} tem seu inverso ${num3}${num2}${num1}`)