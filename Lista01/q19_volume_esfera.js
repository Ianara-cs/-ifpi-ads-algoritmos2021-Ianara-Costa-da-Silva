const input = require('prompt-sync')();

// Entrada
console.log('Para saber o volume da esfera coloque o valor do raio')
const raio = Number (input('Valor do raio(cm): '))
const pi = 3.14

// Processamento
const volume = (4*pi*Math.pow(raio, 3)) / 3

// Saída 
console.log(`O volume da esfera é ${volume.toFixed(1)} cm^3`)