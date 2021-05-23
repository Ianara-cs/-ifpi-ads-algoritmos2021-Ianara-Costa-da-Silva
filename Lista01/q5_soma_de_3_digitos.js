const input = require('prompt-sync')();

// Entrada
console.log('Digite um número com 3 dígitos para efetuar a somas de seus elementos ')
const num1 = Number(input('Digite aqui um número com 3 dígitos: '))

// Meio
const centena = num1 / 100
const resto1 = num1 % 100
const dezena = resto1 / 10
const unidade = resto1 % 10
const resto_totais = centena + dezena + unidade

// Saída
console.log('A soma de seus elementos vale: ', resto_totais)
