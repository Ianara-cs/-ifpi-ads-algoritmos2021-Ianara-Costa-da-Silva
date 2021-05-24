const input = require('prompt-sync')();

// Entrada
console.log('Para saber a área do retângulo coloque a medida da base e da altura')
const base = Number (input('Base(cm): '))
const altura = Number (input('Altura(cm): '))

// Processamento
const area = base * altura

// Saída
console.log(`A área do retângulo é ${area} cm^2 `)