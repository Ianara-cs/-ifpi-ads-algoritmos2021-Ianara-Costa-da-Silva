const input = require('prompt-sync')();

//Entrada
const valor_dolar = Number (input('Coloque o valor de um dólar: '))
const valor_para_converter = Number (input('Quantos dólares você quer converter para real: '))

// Processamento
const conversão_para_real = valor_para_converter  / valor_dolar

// Saída
console.log(`O valor de ${valor_para_converter} $ é equivalente a ${conversão_para_real} R$ `)