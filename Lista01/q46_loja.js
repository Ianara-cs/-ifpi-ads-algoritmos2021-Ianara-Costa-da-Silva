const input = require('prompt-sync')();

// Entrada
const valor_produto = Number(input('Valor do produto: '))

// Processamento
const parcela = (valor_produto - valor_produto%3) / 3
const entrada = parcela + (valor_produto%3)

// Saída 
console.log(`A entrada será R$${entrada},00 e as duas parcela serão de R$${parcela},00`)