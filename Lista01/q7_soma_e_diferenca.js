const input = require ('prompt-sync')();

// Entrada
console.log('Escolha 3 números inteiros para fazer a soma dos dois primeiro e a diferença dos dois últimos')
const num1 = Number (input('Primeiro número: '))
const num2 = Number (input('Segundo número: '))
const num3 = Number (input('Terceiro número: '))

// Processamento
const soma = num1 + num2 
const diferença = num2 - num3
 
// Saída 
console.log(`A soma dos dois primeiros número é ${soma} e a diferença dos dois último é ${diferença}`)