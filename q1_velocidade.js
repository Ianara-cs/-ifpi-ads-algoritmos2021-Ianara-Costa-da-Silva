const input = require('prompt-sync')();

// Entrada
const velocidade_ms = Number (input('velocidade (m/s):'))

// Processamento
const velocidade_km = velocidade_ms * 3.6

// Saída
console.log('A velocidade', velocidade_ms , 'ms')
console.log('é igual a', velocidade_km , 'km')