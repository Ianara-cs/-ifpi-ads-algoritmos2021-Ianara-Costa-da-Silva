const input = require('prompt-sync')();

// Entrada
console.log('Informe o preço de fábrica do carro')
const custo_fabrica = Number(input('Coloque o custo de fábrica: '))

// Processamento
const custo_consumidor = custo_fabrica + (custo_fabrica * 1.856)

// Saída
console.log('O custo do consumidor será R$', custo_consumidor,)