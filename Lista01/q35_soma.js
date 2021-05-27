const input = require ('prompt-sync')();

// Entrada
const num = Number(input('Coloque um número com 4 dígitos: '))

// Processamento
const mil =  (num  - (num % 1000)) / 1000
const cem = ((num % 1000) - (num % 100)) / 100
const dez =  (( num % 100) - (num % 10)) / 10
const uni = num % 10
const soma = (mil) + (cem) + (dez) + (uni)

// Saída
console.log('A soma dos elementos do número', num, 'é:', soma)