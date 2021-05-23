const input = require('prompt-sync')();

// Entrada
console.log('Coloque um valor em real para ver 70% desse valor')
const valor_real = Number (input('Coloque o valor(R$): '))

// Processamento
const valor_porcentagem = valor_real * 0.70

// Saída
console.log(`70% de R$ ${valor_real} é R$ ${valor_porcentagem} `)