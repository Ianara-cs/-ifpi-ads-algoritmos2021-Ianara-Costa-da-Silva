const input = require('prompt-sync')();

// Entrada
console.log('Escolha dois números (A,B) para se ter a ordem inversa(B,A)')

const num1 = (input('Primeiro númeiro: '))
const num2 = (input('Segundo númeiro: '))



// Saída
console.log(`O número (${num1},${num2}) em ordem inversa é: (${num2},${num1})`)