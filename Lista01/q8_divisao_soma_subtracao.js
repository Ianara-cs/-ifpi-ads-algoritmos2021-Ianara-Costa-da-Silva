const input = require('prompt-sync')();

// Entrada
console.log('Escolha 2 números para que sejam somados e subtraídos')
console.log('e logo depois o resultado da soma será dividido pelo resultado da subtração')

const num1 = Number (input('Primeiro número: '))
const num2 = Number (input('Segundo Número: '))

// Processamento
const soma = num1 + num2
const subtração = num1 - num2
const divisão = soma / subtração

// Saída 
console.log('O resultado da soma mais o resultado da subtração é respectivamente:',soma,',',subtração)
console.log('E a divisão da soma pela subtração é', divisão)