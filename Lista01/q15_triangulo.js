const input = require('prompt-sync')();

// Entrada
console.log('Para saber a área do triângulo coloque a medida da base e da altura')
const base = Number (input('Base(cm): '))
const altura = Number (input('Altura(cm): '))

// Processamento
const area = (base*altura) / 2

// Saída 
console.log(`A área do triângulo é ${area} cm^2`)