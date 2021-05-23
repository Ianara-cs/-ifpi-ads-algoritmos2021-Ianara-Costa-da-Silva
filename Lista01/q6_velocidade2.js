const input = require ('prompt-sync')();

// Entrada
console.log('Coloque a velocidade em km/h para que seja convertido em m/s')
const velocidade_km = Number (input('Velocidade km/h: '))
 
// Processamento
const velocidade_ms = velocidade_km / 3.6

// Saída 
console.log(`A velocidade ${velocidade_km} km/h é igual a ${velocidade_ms.toFixed(2)} m/s `)