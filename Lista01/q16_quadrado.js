const input = require('prompt-sync')();

// Entrada
console.log('Para saber a área do quadrado coloque a medida do lado')
const lado = Number(input('Lado(cm): '))

// Processamento
const area = Math.pow(lado, 2)

// Saída
console.log(`A área do quadrado é ${area} cm^2`)